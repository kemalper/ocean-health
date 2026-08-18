import io

import os
REPO = os.getcwd()  # run this from inside your ocean-health repo root

# (file, old, new) triples
edits = [
    (
        f"{REPO}/app/contact/page.tsx",
        "Ocean Health &amp; Travel is a coordinator, not a medical provider. We do not provide medical advice or clinical assessments. All clinical decisions rest with your treating physician. Flights not included. Client money protected via Trust Account.",
        "Ocean Health &amp; Travel is a coordinator, not a medical provider. We do not provide medical advice or clinical assessments. All clinical decisions rest with your treating physician. Flights not included. No coordination fee is charged to patients.",
    ),
    (
        f"{REPO}/app/contact/page.tsx",
        "Flights not included \u00b7 Client money protected via Trust Account \u00b7 Coordinator, not a medical provider \u00b7 Elective procedures only<br />",
        "Flights not included \u00b7 No coordination fee charged to patients \u00b7 Coordinator, not a medical provider \u00b7 Elective procedures only<br />",
    ),
    (
        f"{REPO}/app/about/page.tsx",
        "Flights not included \u00b7 Client money protected via Trust Account \u00b7 Coordinator, not a medical provider \u00b7 Elective procedures only<br />",
        "Flights not included \u00b7 No coordination fee charged to patients \u00b7 Coordinator, not a medical provider \u00b7 Elective procedures only<br />",
    ),
]

for path, old, new in edits:
    with io.open(path, "r", encoding="utf-8") as f:
        content = f.read()
    count = content.count(old)
    if count != 1:
        raise SystemExit(f"ERROR: expected 1 match in {path}, found {count}\n---\n{old}")
    content = content.replace(old, new)
    with io.open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"OK: patched {path}")

print("All edits applied.")
