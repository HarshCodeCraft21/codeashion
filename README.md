# Codeashion Verify

Build a Certificate Verification page for Codeashion Technologies, using the attached screenshot only as a layout and UX reference, NOT as the brand style.

1. Brand Context

Brand: Codeashion Technologies
Website: https://codeashion.com/
Audience: Developers, students, technical teams and organizations.

The existing Codeashion design system must remain the primary visual language.

Brand Design System

Font: Inter

Font stack: Inter, system-ui, sans-serif

Base font size: 16px

Base line height: 24px

Primary surface: Black

Primary text: White

Secondary text: #0f1f3d

Tertiary text: #5c6f8a

Accent: #17bfcf

Strong surface: #f9fafb

Border: #d9e0e8

Small radius: 10px

Medium radius: 12px

Use the existing Codeashion spacing, typography and shadow system consistently.

Do not introduce unrelated colors or a separate visual identity.

2. Certificate Verification Page

Create a dedicated route:

/verify?id=CINT7456

The page must allow anyone with a certificate ID to verify whether a certificate issued by Codeashion Technologies is authentic.

The attached screenshot demonstrates the general information hierarchy:

Header → Page title → Verification status → Certificate information.

However, redesign it so it feels like a natural part of the Codeashion Technologies website.

3. Header

Reuse the existing Codeashion website header/navigation wherever possible.

Do NOT create a completely different header specifically for this page.

The header should contain:

Codeashion Technologies logo

Existing navigation

Appropriate CTA/action if already present in the existing website

Responsive mobile navigation

The verification page should visually feel like it belongs to the same website.

4. Page Hero

Create a clean verification heading section.

Heading

Verify Certificate

Supporting text

"Verify the authenticity of a certificate issued by Codeashion Technologies."

Keep the typography consistent with the existing Codeashion typography scale.

Do not use an oversized heading that feels disconnected from the documentation/technical brand style.

5. Verification Card

Create a centered, professional verification card.

The card should be the main focus of the page.

Verified State

Display:

✓ Certificate Verified

Use the Codeashion cyan accent for the verification indicator rather than the green color from the reference screenshot.

The card should contain:

Verification icon

Verification status

Short confirmation message

Certificate information

Certificate ID prominently displayed

Example information:

Intern Name: Ansh Jain
Roll Number: 5802726
Internship Role: 120 hour training
Duration: 12/08/2026 - 2/09/2026
Certificate ID: CINT-7456
Company Name: Codeashion Technologies
Authorized Signatory: Harsh Sangani
**Position:Junior ** Frontent Developer

Do not connect Database feed it static data

6. Certificate Information Layout

Do not simply display the information as a large block of text.

Use a structured responsive layout.

Desktop:

2-column information grid where appropriate.

Example:

Intern Name | Roll Number
Internship Role | Duration
Certificate ID | Issuing Organization
Authorized By | Position

Mobile:

Stack each field vertically.

Labels should use a smaller, muted typography token.

Values should use stronger primary typography.

Certificate ID should have additional visual emphasis because it is the main verification identifier.

7. Verification States

The page must support three states.

VERIFIED

Show:

Cyan verification icon

"Certificate Verified"

Confirmation message

Complete certificate information

Certificate ID

Issuing organization

INVALID

Show:

Error icon

"Certificate Not Found"

Message explaining that the certificate ID could not be verified

Clear action to try another certificate ID

LOADING

Show:

Accessible loading indicator

Skeleton/loading state for the certificate card

Do not show incorrect or incomplete certificate information while loading

8. URL-Based Verification

Read the certificate ID from the URL query parameter:

/verify?id=INT-2026-A111

The frontend must:

Read the id query parameter.

Validate that the ID exists.

Request the certificate information from the backend/API.

Display the appropriate verification state.

Handle invalid, missing, expired or unavailable certificates gracefully.

Do NOT hardcode certificate data into the frontend.

9. Visual Direction

The attached screenshot is only a UX/layout reference.

Use its concept of:

Clear "Verify Certificate" heading

Large verification result

Central certificate information card

Clear certificate metadata

Official verification feel

But transform the visual design into the Codeashion Technologies design language.

The final page should feel:

Modern

Technical

Minimal

Trustworthy

Professional

Developer-oriented

Consistent with Codeashion

Avoid making it look like a generic NGO, education portal or government verification website.

10. Responsive Design

The page must work properly at:

Desktop

Laptop

Tablet

Mobile

On mobile:

Header must collapse correctly.

Verification card must fit within the viewport.

Information grid must become a single column.

Long certificate names must wrap naturally.

Certificate IDs must never cause horizontal overflow.

Buttons must remain touch-friendly.

11. Accessibility

Follow WCAG 2.2 AA.

The implementation must include:

Semantic HTML

Keyboard navigation

Visible :focus-visible states

Proper heading hierarchy

Accessible labels

Accessible loading state

Accessible error state

Sufficient text/background contrast

Screen-reader-friendly verification status

No information conveyed by color alone

Interactive elements must work with keyboard, mouse and touch.

12. Component States

Every interactive component must define:

Default

Hover

Focus-visible

Active

Disabled

Loading

Error

Use the existing Codeashion design tokens rather than introducing one-off styles.

13. Edge Cases

Handle:

Missing certificate ID

Invalid certificate ID

Certificate not found

API failure

Network timeout

Expired certificate

Very long intern name

Very long organization name

Long certificate ID

Slow API response

Mobile viewport

Empty certificate fields

Never allow the layout to break because of long content.

14. Important Design Constraint

Do NOT copy the screenshot pixel-for-pixel.

The screenshot provides the information architecture and general composition.

The actual design must follow the Codeashion Technologies design system:

Inter typography + dark/white surfaces + cyan accent + clean technical UI + consistent spacing + accessible interactions.

Reuse existing Codeashion components whenever possible instead of creating duplicate components.

The final result should look like:

"Codeashion Technologies Certificate Verification"

—not a separate website embedded inside Codeashion.



## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
