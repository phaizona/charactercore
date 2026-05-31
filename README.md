# 🧬 CharacterCore - Modern Character Profile Template

🔗 **Live Preview:** [https://aliyigityilmaz.github.io/charactercore/](https://aliyigityilmaz.github.io/charactercore/)

An ultra-modular, modern character profile template inspired by tabletop D&D character sheets and Toyhou.se aesthetics. Built using vanilla HTML, CSS, and JavaScript with a sleek cyber-urban dark theme. Perfect for roleplayers (RP), original character (OC) archives, or showcasing tabletop RPG campaign characters.

---

## ✨ Features

* **🧩 Highly Modular Architecture:** Card-based layouts for "Abilities", "Combat Skills", and "Relations" allow users to easily duplicate, remove, or rearrange sections without breaking the layout.
* **📊 D&D-Style Stat Bars:** Left-aligned progress bars with right-aligned labels. Customizing them is as simple as changing an inline CSS width percentage (`style="width: XX%;"`).
* **🖼️ Built-in Lightbox Gallery:** A native JavaScript-driven modal lightbox that opens images in full view with custom caption overlays—no external heavy libraries or dependencies required.
* **📱 Fully Responsive Layout:** Seamlessly scales down from widescreen desktop layouts to clean, single-column vertical flows on mobile devices.
* **🧭 Dynamic Navigation:** Smart scrolling navbar logic that tracks the user's viewport and automatically highlights the active section anchor.

---

## 📂 File Structure

```text
├── index.html        # Main webpage architecture and content blocks
├── style.css         # Modern neon/dark theme styles & responsive breakpoints
└── script.js         # Scroll animations and gallery lightbox core engine
```

🚀 Quick Start
Clone or Download this repository to your local machine.

Open index.html directly in any web browser to preview the template.

Start editing the files using your preferred code editor (VS Code, Notepad++, etc.).

🛠️ How to Customize
This template is explicitly engineered for painless customization, even for those with minimal coding experience.

1. Character Bio & Backstory
Open index.html and locate the descriptive text blocks. Replace the placeholder Lorem ipsum content with your character's lore. The code segments are cleanly divided by explicit semantic comment tags and section IDs (e.g., #about, #history-relations).

2. Tuning the Stat Bars (Attributes & Parameters)
To add, modify, or remove attributes, simply duplicate a stat-row block and adjust the inline CSS width parameter to control the progress bar fill:

HTML
```text
<div class="stat-row">
    <div class="stat-bar-track">
        <div class="stat-bar-fill" style="width: 85%;"></div> </div>
    <span class="stat-label">Strength</span> </div>
```  
3. Expanding Abilities and Relations
Need more skill cards or extra relationship slots? Just copy an existing .skill-card or .relation-card div block and paste it right below. The underlying CSS Flexbox and Grid engines will handle the scaling and spacing automatically.

4. Safe Image Frameworks
The main portrait container (hero-image-container) utilizes strict containment boundaries. No matter the aspect ratio of your artwork, the frame prevents ugly stretching, pixelation, or layout overflows.

📜 License & Credits
Design & Code: ArizonaDev

Made by ArizonaDev. All rights reserved.

This template is free to use and customize for personal character bios, tabletop tracking, and RP communities.
