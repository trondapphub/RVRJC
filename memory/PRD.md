# RVRJC AI Center of Excellence - Interactive Presentation & Dashboard

## Original Problem Statement
Enhance 3 documents (RVRJC_AI_CoE_Pitch.pptx, RVRJC_AI_CoE_Proposal.pdf, FoundryAI_RVRJC_Condensed.pdf) for a demo to RVRJC HODs by creating an interactive web presentation with dashboard.

## User Personas
- **Primary**: RVRJC Heads of Departments (HODs) - academic decision makers evaluating AI transformation partnership
- **Secondary**: College administration, potential partners

## Architecture
```
Frontend: React 19 + Tailwind CSS + Framer Motion
Backend: FastAPI (minimal)
Deployment: AWS Lightsail (manual) via Nginx + Let's Encrypt SSL
Domain: demo.foundryailabs.ai (Cloudflare DNS)
```

## Current Slide Order (22 slides)
1. Transformation - From College to AI Innovation Hub
2. Placement Impact
3. Ranking Impact
4. Student Opportunities - What Students Will Build
5. Career Impact - From Students to AI Engineers
6. Hero - AI Transformation at RVRJC
7. Problem - Current Reality
8. Solution - FoundryAI Ecosystem
9. Platforms - 6 Platforms Overview
10. LLM Platform - Models, Datasets, Agents, Tools, Apps, Templates, Spaces
11. Agent OS - Build & Sell on Marketplace
12. Voice Agents - 3 Steps, 30+ Templates, Self-Pay Model
13. Content Studio - AI Content Creation + Monetization
14. CodeFoundry - Build Real Products + Freelance
15. K-12 Academy - AI Tutor + Tutoring Revenue
16. SSO & Tiers - Basic/Pro/Power (no Unlimited)
17. Quota - Credit-Based Usage (3 tiers)
18. Quota Architecture
19. Metrics
20. Timeline
21. Pricing - ₹9,999/yr, ₹7 Cr investment
22. CTA

## Key Updates (Mar 19, 2026)
- [x] Added Student Opportunities slide (5 building opportunities)
- [x] Added Career Impact slide (portfolio, placement, packages, mic drop)
- [x] Reordered: Impact slides (14-18) moved to front as slides 1-5
- [x] Removed "Unlimited" tier from SSO and Quota slides
- [x] Investment updated to ₹7 Cr
- [x] LLM Platform rewritten: 7 hub items (Models, Datasets, Agents, Tools, Apps, Templates, Spaces)
- [x] Agent OS rewritten: 5 build items + marketplace monetization flow
- [x] Voice Agents rewritten: 3 simple steps + 30+ templates + Discord + self-pay model
- [x] All product slides now include student benefits & monetization sections

## Prioritized Backlog
### P0
- [ ] Guide user to redeploy after content updates
### P1
- [ ] Central Quota Service (FastAPI + Redis + MongoDB)
- [ ] SSO implementation
- [ ] Refactor presentationData.js
### P2
- [ ] PDF export, presenter notes, analytics tracking
