# Sujal Darla — AI Automation Engineer Portfolio

Welcome to the source repository of my professional portfolio website. Developed under my brand **Agent Darla**, this site highlights my systems, automation pipelines, and engineering philosophy. It is built as a lightweight, lightning-fast React application utilizing Vite and vanilla CSS.

## 🚀 Key Technical Features

### 1. Interactive scroll frame-zoom animation
- Uses frame preloading and customized react scroll hook logic.
- Smoothly tracks scroll progress across 10 upscaled, denoised frame assets to produce an Apple-like cinema zoom transition as the visitor scrolls.

### 2. Hybrid lead capture database driver
- The contact section hosts an interactive lead form (`Name` and `Email` fields).
- **Supabase Integration**: Direct clientless connection to a Supabase PostgreSQL table using a native `fetch` client to minimize package size.
- **n8n Webhook Relay**: Direct webhook integration to route leads to n8n workflows for automated qualification, AI profiling, or notification triggers.
- **LocalStorage Fallback (Mock DB)**: If no environment variables are defined, the form automatically falls back to storing leads in `localStorage`, maintaining full client-side demo functionality out-of-the-box.

### 3. Dark Theme & Legibility
- Custom design system with tokens optimized for dark theme layout.
- Added linear gradient scrims, text shadows, and a subtle radial dot-grid overlay to mask low-res animation artifacts and guarantee perfect readability.

### 4. Full Mobile Responsiveness
- Viewport size bounds (`max-width: 100vw; overflow-x: hidden;` on the `body` tag) to prevent horizontal scroll leaks.
- Single-column grid stacking for smartphones (tested down to 360px width), with auto-scaling text elements and wrapped list headers.

---

## 🛠️ Tech Stack
- **Frontend Framework**: React 18, Vite 5
- **Icons**: Lucide React
- **Styling**: Vanilla CSS
- **Orchestration / Relay**: Supabase PostgreSQL API, n8n webhook triggers

---

## 💻 Local Development

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Run Local Development Server
Start the Vite local development server:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Build for Production
Build the optimized production assets inside the `dist/` directory:
```bash
npm run build
```

---

## 🔗 Connecting a Database (Supabase / n8n)
To connect the contact form to a live database:
1. Rename the `.env.example` file in the root folder to `.env`.
2. Configure **Option A** (Supabase URL, Anon Key, and Table name) or **Option B** (n8n Webhook URL) with your credentials:

```env
# Option A: Supabase
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_TABLE=leads

# Option B: n8n Workflow
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
```

If neither is configured, the website automatically stores lead entries in the local browser `localStorage` database under the key `portfolio_leads` for instant validation.
