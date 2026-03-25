# nodejs_jenkins_ex_tbd🧪 Exercise — Node.js + Jenkins (No Solution Mode)
🎯 Goal

Same concept:

Jenkins pipeline
Alpine agent
Node.js app
Run + test locally

But this time you figure out the implementation

🧩 Your Tasks
1. Jenkins
Create (or reuse) an Alpine agent
Give it a new label (your choice)
2. GitHub

Create a public repo with a Node.js app that:

Uses Express
Has:
/ → returns a message from environment variable
/health → returns JSON { status: "OK" }
/time → returns current server time
3. Pipeline Requirements

Your pipeline must:

Use your Alpine agent
Clone from GitHub
Install dependencies
Run the app
Wait for it to start
Test ALL endpoints using curl
4. Rules (important)
❌ Don’t hardcode the message → use env variable
❌ Don’t skip testing stage
❌ Don’t run manually outside Jenkins
✅ Everything must happen inside pipeline
🧠 Hints (not answers)
You’ll need something like:
background process (& or similar)
delay (sleep)
Think about:
how Jenkins handles long-running processes
For /time:
check JavaScript Date
✅ Expected Result
App accessible on:
localhost:3000
Pipeline:
finishes successfully
prints curl responses
Setup includes:
1 Jenkins
1 Alpine agent
1 GitHub repo
1 working pipeline
🚀 If You Want a Twist

After finishing, try:

Make pipeline fail if /health is not OK
Change message using build parameters
Run app on different port per build

If you get stuck, tell me where (not “give solution”) and I’ll guide you without spoiling it.