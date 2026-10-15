#!/usr/bin/env python3
"""Scan the slides/ folder and write js/slides.js, so every deck shows up on the Teaching tab.

Folder layout (one sub-folder per course):
    slides/Animation and VFX/01 Principles of animation.pptx
    slides/Generative AI/Week 1 - Introduction.pdf

Run from the site folder:   python3 tools/make_slides.py
"""
import json, os, re, sys
from urllib.parse import quote

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SLIDES = os.path.join(ROOT, "slides")
EXT = {".pptx", ".ppt", ".pdf", ".key", ".odp"}

def nice(name, strip_number=False):
    name = re.sub(r"[_]+", " ", name).strip()
    if strip_number:
        name = re.sub(r"^\d+[\s._-]+", "", name) or name
    return name[:1].upper() + name[1:] if name.islower() else name

groups = {}
for dirpath, _, files in os.walk(SLIDES):
    for f in sorted(files):
        base, ext = os.path.splitext(f)
        if ext.lower() not in EXT:
            continue
        rel = os.path.relpath(os.path.join(dirpath, f), ROOT).replace(os.sep, "/")
        parts = rel.split("/")                      # slides/<course>/<file>
        course = nice(parts[1]) if len(parts) > 2 else "General"
        groups.setdefault(course, []).append({
            "title": nice(base, strip_number=True),
            "link": "/".join(quote(p) for p in parts),
            "note": "",
            "_sort": f.lower(),
        })

out = []
for course in sorted(groups):
    decks = sorted(groups[course], key=lambda d: d["_sort"])
    for d in decks:
        d.pop("_sort")
    out.append({"course": course, "decks": decks})

with open(os.path.join(ROOT, "js", "slides.js"), "w", encoding="utf-8") as fh:
    fh.write("/* Written automatically by tools/make_slides.py. Re-run it after adding slides. */\n")
    fh.write("const SLIDES_AUTO = " + json.dumps(out, indent=2, ensure_ascii=False) + ";\n")

print("Found %d decks in %d courses." % (sum(len(g["decks"]) for g in out), len(out)))
