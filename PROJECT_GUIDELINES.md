# PROJECT GUIDELINES

## Personal Portfolio

**Governance contract:** StudioNomad Project Governance & AI Context Contract

---

# 1. PROJECT IDENTITY

- **Project:** Personal Portfolio
- **Repository:** `studionomadid/personal-portfolio`
- **Purpose:** Maintain and present a professional engineering, software, security, data, and project portfolio.
- **Portfolio Objective:** Provide a reproducible, professional portfolio site that communicates projects, experience, technical capability, and contact information.

---

# 2. VERIFIED PROJECT STATE

- **Current Milestone:** Not yet mapped to M01–M16.
- **Next Milestone:** Repository reconnaissance and roadmap mapping.
- **Verification Status:** Needs Reconciliation.
- **Last Verified:** 2026-08-22

> Do not infer a completed milestone from commit history alone.

Project progress must be based on repository evidence, tests, artifacts, documentation, and synchronized project state.

---

# 3. ROADMAP

## M01 — PROJECT BOOTSTRAP

- Define project objective
- Define project scope
- Define scope boundaries
- Define technology stack
- Initialize repository
- Initialize environment
- Create project structure
- Create initial documentation

## M02 — DATA / INPUT FOUNDATION

This phase is adapted for a portfolio project.

Equivalent inputs include:

- Portfolio content
- Project metadata
- Experience data
- Technical skills
- Visual assets
- Configuration
- External project references

## M03 — DATA VALIDATION

This phase is adapted for a portfolio project.

Equivalent validation includes:

- Content validation
- Configuration validation
- Project metadata validation
- Link validation
- Asset validation
- Schema validation where applicable

## M04 — DATA PREPARATION

This phase is adapted for a portfolio project.

Equivalent work includes:

- Content preparation
- Asset preparation
- Static-site content preparation
- Build configuration
- Deployment preparation

## M05 — CORE ANALYSIS

Not applicable as a mandatory analytics phase.

Equivalent portfolio work may include:

- Project categorization
- Technical capability mapping
- Experience analysis
- Portfolio content analysis

## M06 — ADVANCED ANALYTICS

Not applicable as a mandatory analytics phase.

Any analytics implemented must be explicitly documented and validated.

## M07 — ANALYTICS DATA LAYER

Not applicable as a mandatory analytics phase.

If structured portfolio data is introduced, canonical data contracts must be established.

## M08 — VISUALIZATION / BI

For this project this milestone maps to:

- Portfolio UI
- Responsive presentation
- Visual hierarchy
- Project presentation
- Visual assets
- Interactive components
- Accessibility
- Presentation quality

## M09 — BUSINESS INSIGHTS

For this project this milestone maps to:

- Portfolio narrative
- Project positioning
- Professional communication
- Technical storytelling
- Career positioning
- Evidence-based presentation of capabilities

## M10 — EXECUTIVE / PORTFOLIO ARTIFACTS

- Executive portfolio narrative
- Project showcases
- Experience presentation
- Technical profile
- Architecture references
- Documentation references
- Evidence inventory
- Portfolio case studies

## M11 — ENGINEERING QUALITY

- Relevant unit tests
- Integration tests where applicable
- Build checks
- Type checks where configured
- Runtime checks
- Repository consistency checks
- Link validation
- Asset validation
- Deployment validation

## M12 — DOCUMENTATION

- README
- Project objective
- Scope
- Architecture
- Project structure
- Technology stack
- Reproducibility
- Environment
- Deployment documentation
- License
- Portfolio value

## M13 — PORTFOLIO QUALITY REVIEW

- Verify README claims
- Verify project claims
- Verify project links
- Verify image references
- Verify deployment claims
- Verify technology claims
- Verify experience claims
- Verify repository references
- Verify professional presentation
- Verify accessibility where applicable

## M14 — FINAL VERIFICATION

- Run full relevant test suite
- Run build checks
- Run compile checks where applicable
- Run artifact validation
- Run link validation
- Run deployment validation
- Run documentation consistency audit
- Run `git diff --check`
- Check for unresolved TODO
- Check for unresolved FIXME
- Check for unresolved TBD
- Verify reproducibility
- Verify repository consistency

## M15 — COMMIT GATE

- Run `git status`
- Run `git diff`
- Run `git diff --cached`
- Review changed files
- Inspect HEAD
- Inspect upstream divergence
- Stage intended changes
- Commit changes
- Verify commit

## M16 — PUSH + REMOTE VERIFICATION

- Verify local HEAD
- Verify branch
- Verify remote
- Push changes
- Run `git fetch origin`
- Verify local HEAD == `origin/main`
- Verify clean working tree
- Verify remote state
- Synchronize Notion
- Mark project COMPLETE only after evidence supports completion

---

# 4. MANDATORY GUIDELINES

## G01 — WORK IN SMALL INCREMENTS

- Never implement the whole project at once
- Work chapter-by-chapter
- Work milestone-by-milestone
- Verify each milestone before continuing
- Do not skip gates

---

## G02 — ALWAYS KNOW CURRENT STATE

At the beginning of every session:

- Show project status
- Show current roadmap
- Show current milestone
- Show completed milestones
- Show next milestone
- Show repository state
- Show testing state
- Show verification state

---

## G03 — FULL FILE OUTPUT

When implementation requires files:

- Provide complete files
- Make files copy/paste-ready
- Avoid partial snippets
- Avoid unexplained placeholders
- Avoid incomplete implementations
- Preserve project conventions

No artificial TODO placeholders are allowed when the implementation is expected to be complete.

---

## G04 — ARCHITECTURE FIRST

Before implementation:

- Define purpose
- Define responsibilities
- Define dependencies
- Define data flow
- Define expected output
- Define integration points
- Define validation requirements

---

## G05 — CONTRACT FIRST

For every important:

- Dataset
- Module
- Configuration
- Content model
- API
- Artifact

Define:

- Schema
- Required fields
- Expected structure
- Data types
- Business rules
- Validation behavior
- Failure behavior

---

## G06 — TEST BEFORE PROCEEDING

Every meaningful milestone must follow:

1. Run relevant tests
2. Inspect failures
3. Fix failures
4. Re-run tests
5. Review results
6. Only then continue

---

## G07 — RECONCILIATION

Important information must agree across:

- Source repository
- Source files
- Configuration
- Tests
- Generated artifacts
- README
- Reports
- Dashboards where applicable
- Notion project state
- GitHub state

Conflicts must be explicitly reported.

---

## G08 — NO UNVERIFIED CLAIMS

README and portfolio claims must be supported by:

- Actual files
- Actual code
- Actual repositories
- Actual tests
- Actual generated artifacts
- Actual deployment evidence

Never claim something is complete merely because it is planned.

---

## G09 — INTERPRETATION DISCIPLINE

Always distinguish:

- Observation
- Correlation
- Hypothesis
- Causal claim
- Recommendation

Never present correlation as causation.

Never present an assumption as verified evidence.

---

## G10 — DATA / INFORMATION DISCLOSURE

Where applicable explicitly document:

- Real vs synthetic data
- Assumptions
- Scope
- Limitations
- Forecast limitations
- Audit limitations
- Security assessment limitations
- Third-party dependencies

---

## G11 — REPRODUCIBILITY

A new user should be able to:

- Clone the repository
- Install the environment
- Understand the architecture
- Run the project
- Run tests
- Generate required artifacts
- Reproduce documented results

---

## G12 — PORTFOLIO QUALITY

The final project should communicate:

- Problem
- Context
- Approach
- Architecture
- Engineering
- Implementation
- Results
- Findings
- Business / professional value
- Evidence
- Limitations

---

## G13 — GIT DISCIPLINE

Before commit:

```text
git status
git diff
git diff --cached# PROJECT GUIDELINES

## Personal Portfolio

**Governance contract:** StudioNomad Project Governance & AI Context Contract

---

# 1. PROJECT IDENTITY

- **Project:** Personal Portfolio
- **Repository:** `studionomadid/personal-portfolio`
- **Purpose:** Maintain and present a professional engineering, software, security, data, and project portfolio.
- **Portfolio Objective:** Provide a reproducible, professional portfolio site that communicates projects, experience, technical capability, and contact information.

---

# 2. VERIFIED PROJECT STATE

- **Current Milestone:** Not yet mapped to M01–M16.
- **Next Milestone:** Repository reconnaissance and roadmap mapping.
- **Verification Status:** Needs Reconciliation.
- **Last Verified:** 2026-08-22

> Do not infer a completed milestone from commit history alone.

Project progress must be based on repository evidence, tests, artifacts, documentation, and synchronized project state.

---

# 3. ROADMAP

## M01 — PROJECT BOOTSTRAP

- Define project objective
- Define project scope
- Define scope boundaries
- Define technology stack
- Initialize repository
- Initialize environment
- Create project structure
- Create initial documentation

## M02 — DATA / INPUT FOUNDATION

This phase is adapted for a portfolio project.

Equivalent inputs include:

- Portfolio content
- Project metadata
- Experience data
- Technical skills
- Visual assets
- Configuration
- External project references

## M03 — DATA VALIDATION

This phase is adapted for a portfolio project.

Equivalent validation includes:

- Content validation
- Configuration validation
- Project metadata validation
- Link validation
- Asset validation
- Schema validation where applicable

## M04 — DATA PREPARATION

This phase is adapted for a portfolio project.

Equivalent work includes:

- Content preparation
- Asset preparation
- Static-site content preparation
- Build configuration
- Deployment preparation

## M05 — CORE ANALYSIS

Not applicable as a mandatory analytics phase.

Equivalent portfolio work may include:

- Project categorization
- Technical capability mapping
- Experience analysis
- Portfolio content analysis

## M06 — ADVANCED ANALYTICS

Not applicable as a mandatory analytics phase.

Any analytics implemented must be explicitly documented and validated.

## M07 — ANALYTICS DATA LAYER

Not applicable as a mandatory analytics phase.

If structured portfolio data is introduced, canonical data contracts must be established.

## M08 — VISUALIZATION / BI

For this project this milestone maps to:

- Portfolio UI
- Responsive presentation
- Visual hierarchy
- Project presentation
- Visual assets
- Interactive components
- Accessibility
- Presentation quality

## M09 — BUSINESS INSIGHTS

For this project this milestone maps to:

- Portfolio narrative
- Project positioning
- Professional communication
- Technical storytelling
- Career positioning
- Evidence-based presentation of capabilities

## M10 — EXECUTIVE / PORTFOLIO ARTIFACTS

- Executive portfolio narrative
- Project showcases
- Experience presentation
- Technical profile
- Architecture references
- Documentation references
- Evidence inventory
- Portfolio case studies

## M11 — ENGINEERING QUALITY

- Relevant unit tests
- Integration tests where applicable
- Build checks
- Type checks where configured
- Runtime checks
- Repository consistency checks
- Link validation
- Asset validation
- Deployment validation

## M12 — DOCUMENTATION

- README
- Project objective
- Scope
- Architecture
- Project structure
- Technology stack
- Reproducibility
- Environment
- Deployment documentation
- License
- Portfolio value

## M13 — PORTFOLIO QUALITY REVIEW

- Verify README claims
- Verify project claims
- Verify project links
- Verify image references
- Verify deployment claims
- Verify technology claims
- Verify experience claims
- Verify repository references
- Verify professional presentation
- Verify accessibility where applicable

## M14 — FINAL VERIFICATION

- Run full relevant test suite
- Run build checks
- Run compile checks where applicable
- Run artifact validation
- Run link validation
- Run deployment validation
- Run documentation consistency audit
- Run `git diff --check`
- Check for unresolved TODO
- Check for unresolved FIXME
- Check for unresolved TBD
- Verify reproducibility
- Verify repository consistency

## M15 — COMMIT GATE

- Run `git status`
- Run `git diff`
- Run `git diff --cached`
- Review changed files
- Inspect HEAD
- Inspect upstream divergence
- Stage intended changes
- Commit changes
- Verify commit

## M16 — PUSH + REMOTE VERIFICATION

- Verify local HEAD
- Verify branch
- Verify remote
- Push changes
- Run `git fetch origin`
- Verify local HEAD == `origin/main`
- Verify clean working tree
- Verify remote state
- Synchronize Notion
- Mark project COMPLETE only after evidence supports completion

---

# 4. MANDATORY GUIDELINES

## G01 — WORK IN SMALL INCREMENTS

- Never implement the whole project at once
- Work chapter-by-chapter
- Work milestone-by-milestone
- Verify each milestone before continuing
- Do not skip gates

---

## G02 — ALWAYS KNOW CURRENT STATE

At the beginning of every session:

- Show project status
- Show current roadmap
- Show current milestone
- Show completed milestones
- Show next milestone
- Show repository state
- Show testing state
- Show verification state

---

## G03 — FULL FILE OUTPUT

When implementation requires files:

- Provide complete files
- Make files copy/paste-ready
- Avoid partial snippets
- Avoid unexplained placeholders
- Avoid incomplete implementations
- Preserve project conventions

No artificial TODO placeholders are allowed when the implementation is expected to be complete.

---

## G04 — ARCHITECTURE FIRST

Before implementation:

- Define purpose
- Define responsibilities
- Define dependencies
- Define data flow
- Define expected output
- Define integration points
- Define validation requirements

---

## G05 — CONTRACT FIRST

For every important:

- Dataset
- Module
- Configuration
- Content model
- API
- Artifact

Define:

- Schema
- Required fields
- Expected structure
- Data types
- Business rules
- Validation behavior
- Failure behavior

---

## G06 — TEST BEFORE PROCEEDING

Every meaningful milestone must follow:

1. Run relevant tests
2. Inspect failures
3. Fix failures
4. Re-run tests
5. Review results
6. Only then continue

---

## G07 — RECONCILIATION

Important information must agree across:

- Source repository
- Source files
- Configuration
- Tests
- Generated artifacts
- README
- Reports
- Dashboards where applicable
- Notion project state
- GitHub state

Conflicts must be explicitly reported.

---

## G08 — NO UNVERIFIED CLAIMS

README and portfolio claims must be supported by:

- Actual files
- Actual code
- Actual repositories
- Actual tests
- Actual generated artifacts
- Actual deployment evidence

Never claim something is complete merely because it is planned.

---

## G09 — INTERPRETATION DISCIPLINE

Always distinguish:

- Observation
- Correlation
- Hypothesis
- Causal claim
- Recommendation

Never present correlation as causation.

Never present an assumption as verified evidence.

---

## G10 — DATA / INFORMATION DISCLOSURE

Where applicable explicitly document:

- Real vs synthetic data
- Assumptions
- Scope
- Limitations
- Forecast limitations
- Audit limitations
- Security assessment limitations
- Third-party dependencies

---

## G11 — REPRODUCIBILITY

A new user should be able to:

- Clone the repository
- Install the environment
- Understand the architecture
- Run the project
- Run tests
- Generate required artifacts
- Reproduce documented results

---

## G12 — PORTFOLIO QUALITY

The final project should communicate:

- Problem
- Context
- Approach
- Architecture
- Engineering
- Implementation
- Results
- Findings
- Business / professional value
- Evidence
- Limitations

---

## G13 — GIT DISCIPLINE

Before commit:

```text
git status
git diff
git diff --cached
