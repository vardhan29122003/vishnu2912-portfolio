
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
       .gradient-bg {
  background: linear-gradient(135deg, #0f172a, #1e293b, #3b82f6);
  color: white;
}

        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .skill-bar { transition: width 1s ease-in-out; }
        .typing-animation { 
            border-right: 2px solid #ec4899; 
            animation: blink 1s infinite; 
        }
        @keyframes blink { 0%, 50% { border-color: transparent; } 51%, 100% { border-color: #ec4899; } }
        .section-fade { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
        .section-fade.visible { opacity: 1; transform: translateY(0); }
    
