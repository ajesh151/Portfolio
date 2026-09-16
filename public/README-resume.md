# Replacing the CV

The "Download CV" and "View CV" buttons point at `/resume.pdf`.

To use your real CV: replace `public/resume.pdf` with your own PDF, keeping the
same file name. Nothing in the code needs to change. The path is also configurable
in `src/data/portfolio.ts` (`profile.resumePath`).

The file currently in place is a one-page placeholder — it contains no personal
information.
