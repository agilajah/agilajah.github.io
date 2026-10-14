# AGENTS.md: agilajah.github.io
Read `README.md` first. Repo-specific rules: TODO.

AstraLuma backbone:
- Context `.astraluma/context.md`, go-to-market `.astraluma/gtm.md`, decisions `.astraluma/decisions/`.
- Room memory is the herdr-ctx board (`herdr-ctx show`): verified facts and decisions go there.
- Every user-visible change adds one file in `changelog.d/<added|changed|fixed|maintenance>/`.
- Heavy checks go through the AstraLuma worker queue on ygg-gcp where set up (TODO for this repo if no remote.sh).
