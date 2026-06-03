// ==================== MANGA SVG ILLUSTRATIONS ====================
var mangaSVGs = {
  1: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#1a1a2e" width="200" height="200"/><circle cx="30" cy="30" r="2" fill="#fff" opacity=".7"/><circle cx="80" cy="50" r="1.5" fill="#fff" opacity=".5"/><circle cx="150" cy="25" r="2" fill="#fff" opacity=".6"/><circle cx="170" cy="70" r="1" fill="#fff" opacity=".4"/><circle cx="45" cy="80" r="1.5" fill="#fff" opacity=".5"/><path d="M60,170 Q100,130 140,170 L140,200 L60,200Z" fill="#2d2d44" opacity=".5"/><rect x="70" y="155" width="20" height="25" rx="2" fill="#3d3d5c"/><rect x="110" y="150" width="18" height="30" rx="2" fill="#3d3d5c"/><ellipse cx="100" cy="120" rx="35" ry="12" fill="#c9a84c" opacity=".3"/><path d="M85,120 L80,75 L120,75 L115,120" fill="#e8e8e8" stroke="#c9a84c" stroke-width="1"/><path d="M80,75 L100,60 L120,75" fill="#8B0000" stroke="#c9a84c" stroke-width=".5"/><circle cx="100" cy="95" r="8" fill="#8B0000" opacity=".6"/><path d="M96,95 L104,95 M100,91 L100,99" stroke="#fff" stroke-width="1.5"/><ellipse cx="55" cy="100" rx="4" ry="3" fill="#ffb7c5" opacity=".6"/><ellipse cx="155" cy="85" rx="3" ry="2.5" fill="#ffb7c5" opacity=".5"/><text x="100" y="190" text-anchor="middle" font-size="10" fill="#c9a84c" font-family="serif">✈️</text></svg>',
  2: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff5f0" width="200" height="200"/><path d="M0,160 Q50,140 100,150 Q150,160 200,145 L200,200 L0,200Z" fill="#8B0000" opacity=".15"/><polygon points="100,40 80,80 120,80" fill="#8B0000"/><rect x="85" y="80" width="30" height="40" fill="#fff" stroke="#8B0000" stroke-width="1"/><path d="M70,120 L130,120 L120,140 L80,140Z" fill="#c9a84c"/><rect x="88" y="90" width="24" height="25" fill="#8B0000" opacity=".2" rx="1"/><line x1="95" y1="90" x2="95" y2="115" stroke="#8B0000" stroke-width=".5" opacity=".3"/><line x1="105" y1="90" x2="105" y2="115" stroke="#8B0000" stroke-width=".5" opacity=".3"/><circle cx="45" cy="50" r="20" fill="#ffb7c5" opacity=".4"/><circle cx="160" cy="60" r="15" fill="#ffb7c5" opacity=".3"/><path d="M0,170 Q30,165 60,172 Q90,178 120,168 Q150,160 180,165 L200,160 L200,200 L0,200Z" fill="#8B0000" opacity=".1"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B0000" font-family="serif">タイ</text></svg>',
  3: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff8f0" width="200" height="200"/><path d="M60,50 L60,140 M140,50 L140,140" stroke="#8B0000" stroke-width="3"/><path d="M50,50 L150,50" stroke="#8B0000" stroke-width="4"/><path d="M45,50 L100,30 L155,50" fill="#8B0000" stroke="#c9a84c" stroke-width="1"/><path d="M60,90 L140,90" stroke="#8B0000" stroke-width="1" opacity=".4"/><circle cx="100" cy="110" r="20" fill="#c9a84c" opacity=".2"/><path d="M85,110 Q100,95 115,110" fill="#8B0000" opacity=".3"/><rect x="65" y="140" width="70" height="10" fill="#8B0000" opacity=".15" rx="2"/><ellipse cx="30" cy="70" rx="6" ry="5" fill="#ffb7c5" opacity=".5"/><ellipse cx="175" cy="45" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><ellipse cx="50" cy="35" rx="4" ry="3" fill="#ffb7c5" opacity=".3"/><path d="M0,170 Q50,160 100,165 Q150,170 200,160 L200,200 L0,200Z" fill="#8B0000" opacity=".08"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B0000" font-family="serif">寺院</text></svg>',
  4: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff5f0" width="200" height="200"/><path d="M20,130 L50,100 L50,130Z" fill="#8B0000" opacity=".2"/><path d="M150,120 L180,90 L180,120Z" fill="#8B0000" opacity=".2"/><rect x="55" y="60" width="90" height="70" fill="#fff" stroke="#8B0000" stroke-width="1" rx="3"/><path d="M50,60 L100,40 L150,60" fill="#8B0000" stroke="#c9a84c" stroke-width="1"/><rect x="70" y="75" width="20" height="20" fill="#8B0000" opacity=".15" rx="1"/><rect x="110" y="75" width="20" height="20" fill="#8B0000" opacity=".15" rx="1"/><rect x="85" y="110" width="30" height="20" fill="#c9a84c" opacity=".2" rx="1"/><circle cx="25" cy="40" r="5" fill="#ffb7c5" opacity=".5"/><circle cx="170" cy="50" r="4" fill="#ffb7c5" opacity=".4"/><path d="M0,170 Q50,162 100,168 Q150,172 200,165 L200,200 L0,200Z" fill="#8B0000" opacity=".08"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B0000" font-family="serif">市場</text></svg>',
  5: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#f0f5ff" width="200" height="200"/><path d="M0,140 Q30,130 60,135 Q100,125 140,130 Q170,135 200,128 L200,200 L0,200Z" fill="#0ea5e9" opacity=".15"/><path d="M40,90 Q60,80 80,85 Q100,90 120,82" stroke="#8B4513" stroke-width="2" fill="none"/><path d="M50,85 Q55,60 65,70 Q70,80 55,85" fill="#c9a84c" opacity=".5"/><path d="M90,82 Q95,55 105,65 Q110,75 95,82" fill="#c9a84c" opacity=".5"/><ellipse cx="70" cy="100" rx="15" ry="5" fill="#0ea5e9" opacity=".2"/><rect x="85" y="95" width="30" height="15" fill="#8B4513" opacity=".4" rx="3"/><circle cx="100" cy="102" r="2" fill="#c9a84c"/><path d="M60,100 L70,105 M80,100 L70,105" stroke="#8B4513" stroke-width="1" opacity=".5"/><ellipse cx="30" cy="50" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><ellipse cx="170" cy="45" rx="4" ry="3" fill="#ffb7c5" opacity=".3"/><path d="M0,175 Q50,168 100,172 Q150,178 200,170 L200,200 L0,200Z" fill="#0ea5e9" opacity=".08"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B4513" font-family="serif">舟</text></svg>',
  6: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#f0f8ff" width="200" height="200"/><path d="M0,130 Q50,120 100,125 Q150,130 200,120 L200,200 L0,200Z" fill="#0ea5e9" opacity=".12"/><path d="M60,70 L80,40 L120,40 L140,70 L140,130 L60,130Z" fill="#fff" stroke="#0ea5e9" stroke-width="1.5" rx="3"/><path d="M75,70 L75,100 M125,70 L125,100" stroke="#0ea5e9" stroke-width="1" opacity=".4"/><path d="M85,40 L100,25 L115,40" fill="#0ea5e9" stroke="#c9a84c" stroke-width="1"/><circle cx="100" cy="85" r="12" fill="#0ea5e9" opacity=".15"/><path d="M94,85 L106,85 M100,79 L100,91" stroke="#0ea5e9" stroke-width="1.5" opacity=".4"/><ellipse cx="30" cy="60" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><path d="M0,170 Q50,165 100,170 Q150,175 200,168 L200,200 L0,200Z" fill="#0ea5e9" opacity=".06"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#0ea5e9" font-family="serif">沖縄</text></svg>',
  7: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff8f5" width="200" height="200"/><path d="M70,130 L70,60 L100,45 L130,60 L130,130" fill="#8B0000" opacity=".85"/><path d="M65,60 L100,40 L135,60" fill="#c9a84c" stroke="#8B0000" stroke-width="1"/><rect x="85" y="80" width="30" height="25" fill="#fff" opacity=".9" rx="1"/><path d="M80,105 L120,105" stroke="#c9a84c" stroke-width="1"/><circle cx="100" cy="92" r="3" fill="#8B0000" opacity=".3"/><path d="M0,160 Q50,155 100,158 Q150,162 200,155 L200,200 L0,200Z" fill="#8B0000" opacity=".08"/><ellipse cx="40" cy="45" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><ellipse cx="165" cy="55" rx="4" ry="3" fill="#ffb7c5" opacity=".3"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B0000" font-family="serif">首里城</text></svg>',
  8: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sea8" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#87ceeb" stop-opacity=".2"/><stop offset="100%" stop-color="#0ea5e9" stop-opacity=".4"/></linearGradient></defs><rect fill="#f0f8ff" width="200" height="200"/><circle cx="160" cy="35" r="18" fill="#ffd700" opacity=".3"/><path d="M0,120 Q30,110 60,115 Q100,105 140,112 Q170,118 200,110 L200,200 L0,200Z" fill="url(#sea8)"/><path d="M0,140 Q40,130 80,135 Q120,128 160,132 Q190,138 200,135 L200,200 L0,200Z" fill="#0ea5e9" opacity=".25"/><ellipse cx="70" cy="108" rx="25" ry="6" fill="#fff" opacity=".5"/><ellipse cx="140" cy="103" rx="18" ry="5" fill="#fff" opacity=".4"/><path d="M90,80 L95,95 L85,95Z" fill="#0ea5e9" opacity=".3"/><circle cx="150" cy="70" r="3" fill="#0ea5e9" opacity=".4"/><path d="M147,70 L153,70 M150,67 L150,73" stroke="#fff" stroke-width="1" opacity=".6"/><ellipse cx="35" cy="50" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#0ea5e9" font-family="serif">海</text></svg>',
  9: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#f5fff5" width="200" height="200"/><circle cx="160" cy="40" r="16" fill="#ffd700" opacity=".25"/><line x1="60" y1="60" x2="60" y2="140" stroke="#2d5a27" stroke-width="3"/><ellipse cx="60" cy="55" rx="15" ry="10" fill="#4a7c3f" opacity=".6"/><line x1="140" y1="70" x2="140" y2="140" stroke="#2d5a27" stroke-width="3"/><ellipse cx="140" cy="65" rx="18" ry="12" fill="#4a7c3f" opacity=".6"/><line x1="100" y1="80" x2="100" y2="140" stroke="#2d5a27" stroke-width="2.5"/><ellipse cx="100" cy="75" rx="14" ry="9" fill="#4a7c3f" opacity=".5"/><path d="M0,140 Q50,135 100,138 Q150,142 200,135 L200,200 L0,200Z" fill="#4a7c3f" opacity=".1"/><rect x="80" y="100" width="40" height="25" fill="#8B4513" opacity=".3" rx="2"/><path d="M85,100 L100,90 L115,100" fill="#8B0000" opacity=".3"/><ellipse cx="30" cy="45" rx="4" ry="3" fill="#ffb7c5" opacity=".3"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#2d5a27" font-family="serif">木</text></svg>',
  10: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#fffaf0" width="200" height="200"/><path d="M40,140 L40,80 M160,140 L160,80" stroke="#8B4513" stroke-width="3"/><path d="M30,80 L170,80" stroke="#8B4513" stroke-width="2"/><path d="M35,80 Q100,65 165,80" fill="#c9a84c" opacity=".2"/><rect x="60" y="90" width="80" height="50" fill="#fff" stroke="#c9a84c" stroke-width="1" rx="3"/><rect x="75" y="95" width="20" height="20" fill="#c9a84c" opacity=".15"/><rect x="105" y="95" width="20" height="20" fill="#c9a84c" opacity=".15"/><circle cx="100" cy="105" r="5" fill="#8B0000" opacity=".2"/><path d="M0,170 Q50,162 100,168 Q150,172 200,165 L200,200 L0,200Z" fill="#c9a84c" opacity=".08"/><ellipse cx="35" cy="50" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#c9a84c" font-family="serif">高松</text></svg>',
  11: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#f8f5ff" width="200" height="200"/><circle cx="130" cy="70" r="28" fill="#ffd700" opacity=".2"/><path d="M120,70 Q130,55 140,70 Q135,78 130,70" fill="#8B0000"/><path d="M118,68 Q130,52 142,68" stroke="#2d5a27" stroke-width="2" fill="none"/><rect x="60" y="90" width="80" height="50" fill="#fff" stroke="#c9a84c" stroke-width="1" rx="5"/><rect x="75" y="100" width="15" height="25" fill="#8B0000" opacity=".1"/><rect x="110" y="100" width="15" height="25" fill="#8B0000" opacity=".1"/><circle cx="100" cy="112" r="8" fill="#c9a84c" opacity=".15"/><path d="M0,160 Q50,155 100,158 Q150,162 200,155 L200,200 L0,200Z" fill="#8B0000" opacity=".06"/><ellipse cx="40" cy="40" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B0000" font-family="serif">直島</text></svg>',
  12: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff8f0" width="200" height="200"/><path d="M60,140 L60,70 L100,50 L140,70 L140,140" fill="#fff" stroke="#8B0000" stroke-width="1.5"/><path d="M55,70 L100,45 L145,70" fill="#8B0000" stroke="#c9a84c" stroke-width="1"/><rect x="80" y="85" width="40" height="30" fill="#c9a84c" opacity=".2" rx="2"/><rect x="90" y="95" width="20" height="20" fill="#8B0000" opacity=".15" rx="1"/><path d="M0,140 Q50,135 100,138 Q150,142 200,135 L200,200 L0,200Z" fill="#0ea5e9" opacity=".1"/><circle cx="170" cy="40" r="15" fill="#ffd700" opacity=".2"/><path d="M40,140 L40,130 L160,130 L160,140" stroke="#8B0000" stroke-width="1" opacity=".3"/><ellipse cx="30" cy="50" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B0000" font-family="serif">神戸</text></svg>',
  13: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff5f0" width="200" height="200"/><circle cx="100" cy="55" r="20" fill="#8B0000" opacity=".8"/><path d="M85,55 L115,55 M100,40 L100,70" stroke="#fff" stroke-width="1.5" opacity=".6"/><circle cx="100" cy="55" r="8" fill="#c9a84c" opacity=".4"/><rect x="60" y="90" width="80" height="50" fill="#fff" stroke="#8B0000" stroke-width="1" rx="3"/><rect x="75" y="100" width="50" height="8" fill="#8B0000" opacity=".1" rx="1"/><rect x="75" y="115" width="50" height="8" fill="#c9a84c" opacity=".1" rx="1"/><circle cx="45" cy="85" r="8" fill="#8B0000" opacity=".15"/><path d="M0,165 Q50,158 100,162 Q150,168 200,160 L200,200 L0,200Z" fill="#8B0000" opacity=".06"/><ellipse cx="165" cy="45" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B0000" font-family="serif">酒</text></svg>',
  14: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff8f5" width="200" height="200"/><path d="M50,130 L50,70 L100,50 L150,70 L150,130" fill="#c9a84c" opacity=".15" stroke="#8B0000" stroke-width="1"/><path d="M45,70 L100,45 L155,70" fill="#8B0000" stroke="#c9a84c" stroke-width="1"/><rect x="70" y="85" width="60" height="45" fill="#fff" opacity=".8" rx="2"/><rect x="82" y="90" width="36" height="35" fill="#FF6B6B" opacity=".15" rx="2"/><circle cx="100" cy="107" r="10" fill="#FF6B6B" opacity=".2"/><path d="M0,155 Q50,148 100,152 Q150,158 200,150 L200,200 L0,200Z" fill="#FF6B6B" opacity=".08"/><rect x="20" y="95" width="30" height="25" fill="#FF6B6B" opacity=".1" rx="3"/><rect x="150" y="95" width="30" height="25" fill="#FF6B6B" opacity=".1" rx="3"/><circle cx="35" cy="107" r="3" fill="#FF6B6B" opacity=".3"/><circle cx="165" cy="107" r="3" fill="#FF6B6B" opacity=".3"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#FF6B6B" font-family="serif">大阪</text></svg>',
  15: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#0a0a1a" width="200" height="200"/><circle cx="50" cy="40" r="3" fill="#FF6B6B" opacity=".7"/><circle cx="150" cy="30" r="2" fill="#0ea5e9" opacity=".6"/><circle cx="100" cy="50" r="2.5" fill="#c9a84c" opacity=".5"/><circle cx="30" cy="80" r="2" fill="#8B0000" opacity=".6"/><circle cx="170" cy="70" r="1.5" fill="#FF6B6B" opacity=".5"/><path d="M60,100 Q80,85 100,90 Q120,80 140,95" stroke="#FF6B6B" stroke-width="2" fill="none" opacity=".6"/><circle cx="80" cy="88" r="8" fill="#FF6B6B" opacity=".15"/><circle cx="120" cy="85" r="6" fill="#0ea5e9" opacity=".15"/><rect x="70" y="120" width="60" height="40" fill="#1a1a2e" stroke="#c9a84c" stroke-width=".5" rx="3"/><rect x="80" y="125" width="15" height="10" fill="#FF6B6B" opacity=".2"/><rect x="105" y="125" width="15" height="10" fill="#0ea5e9" opacity=".2"/><path d="M0,170 Q50,165 100,168 Q150,172 200,166 L200,200 L0,200Z" fill="#1a1a2e" opacity=".8"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#c9a84c" font-family="serif">チームラボ</text></svg>',
  16: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#f5f5f5" width="200" height="200"/><path d="M60,130 L60,60 L100,40 L140,60 L140,130" fill="#2C2C2C" opacity=".85"/><path d="M55,60 L100,35 L145,60" fill="#8B0000" stroke="#c9a84c" stroke-width="1"/><rect x="80" y="75" width="40" height="30" fill="#fff" opacity=".9" rx="1"/><rect x="88" y="80" width="24" height="20" fill="#8B0000" opacity=".15" rx="1"/><path d="M0,155 Q50,148 100,152 Q150,158 200,150 L200,200 L0,200Z" fill="#2C2C2C" opacity=".06"/><circle cx="170" cy="45" r="18" fill="#8B0000" opacity=".1"/><ellipse cx="30" cy="50" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#2C2C2C" font-family="serif">서울</text></svg>',
  17: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff5f8" width="200" height="200"/><path d="M50,130 L50,80 L80,60 L120,60 L150,80 L150,130" fill="#2C2C2C" opacity=".75"/><path d="M45,80 L100,55 L155,80" fill="#8B0000" stroke="#c9a84c" stroke-width="1"/><rect x="70" y="90" width="60" height="35" fill="#fff" opacity=".85" rx="2"/><rect x="82" y="95" width="36" height="25" fill="#c9a84c" opacity=".1" rx="1"/><circle cx="100" cy="107" r="8" fill="#8B0000" opacity=".15"/><path d="M0,160 Q50,155 100,158 Q150,162 200,155 L200,200 L0,200Z" fill="#2C2C2C" opacity=".05"/><ellipse cx="30" cy="50" rx="6" ry="5" fill="#ffb7c5" opacity=".5"/><ellipse cx="170" cy="45" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B0000" font-family="serif">景福宮</text></svg>',
  18: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff0f5" width="200" height="200"/><path d="M40,130 L40,80" stroke="#2C2C2C" stroke-width="2"/><ellipse cx="40" cy="75" rx="12" ry="8" fill="#2C2C2C" opacity=".7"/><path d="M160,130 L160,80" stroke="#2C2C2C" stroke-width="2"/><ellipse cx="160" cy="75" rx="12" ry="8" fill="#2C2C2C" opacity=".7"/><rect x="60" y="85" width="80" height="45" fill="#fff" stroke="#8B0000" stroke-width="1" rx="5"/><rect x="75" y="90" width="50" height="8" fill="#8B0000" opacity=".1" rx="1"/><rect x="75" y="105" width="50" height="8" fill="#c9a84c" opacity=".1" rx="1"/><circle cx="100" cy="100" r="5" fill="#FF6B6B" opacity=".3"/><path d="M0,160 Q50,155 100,158 Q150,162 200,155 L200,200 L0,200Z" fill="#8B0000" opacity=".06"/><ellipse cx="80" cy="40" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#8B0000" font-family="serif">明洞</text></svg>',
  19: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#f0f0ff" width="200" height="200"/><circle cx="100" cy="50" r="25" fill="#2C2C2C" opacity=".15"/><path d="M95,75 L100,50 L105,75" fill="#8B0000" opacity=".5"/><circle cx="100" cy="50" r="3" fill="#FF6B6B" opacity=".7"/><rect x="70" y="90" width="60" height="50" fill="#fff" stroke="#2C2C2C" stroke-width="1" rx="5"/><rect x="85" y="95" width="30" height="35" fill="#2C2C2C" opacity=".1" rx="2"/><path d="M90,100 L100,112 L110,100" stroke="#8B0000" stroke-width="1.5" fill="none" opacity=".4"/><path d="M0,165 Q50,158 100,162 Q150,168 200,160 L200,200 L0,200Z" fill="#2C2C2C" opacity=".05"/><ellipse cx="35" cy="55" rx="5" ry="4" fill="#ffb7c5" opacity=".4"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#2C2C2C" font-family="serif">タワー</text></svg>',
  20: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect fill="#1a1a2e" width="200" height="200"/><circle cx="35" cy="35" r="2" fill="#fff" opacity=".7"/><circle cx="85" cy="55" r="1.5" fill="#fff" opacity=".5"/><circle cx="155" cy="30" r="2" fill="#fff" opacity=".6"/><circle cx="45" cy="75" r="1" fill="#fff" opacity=".4"/><circle cx="170" cy="65" r="1.5" fill="#fff" opacity=".5"/><path d="M60,120 Q80,105 100,110 Q120,100 140,115" stroke="#c9a84c" stroke-width="1.5" fill="none" opacity=".4"/><path d="M80,110 L100,80 L120,110" fill="#e8e8e8" stroke="#c9a84c" stroke-width="1" opacity=".7"/><circle cx="100" cy="95" r="6" fill="#8B0000" opacity=".4"/><path d="M96,95 L104,95 M100,91 L100,99" stroke="#fff" stroke-width="1" opacity=".5"/><path d="M0,170 Q50,165 100,168 Q150,172 200,166 L200,200 L0,200Z" fill="#1a1a2e" opacity=".9"/><ellipse cx="55" cy="95" rx="5" ry="4" fill="#ffb7c5" opacity=".3"/><ellipse cx="150" cy="85" rx="4" ry="3" fill="#ffb7c5" opacity=".3"/><text x="100" y="190" text-anchor="middle" font-size="9" fill="#c9a84c" font-family="serif">帰る</text></svg>'
};

// ==================== DAY FLAGS ====================
// Mappa bandiera per ogni giorno in base al paese
const dayFlags = {
  1: '✈️', 2: '🇹🇭', 3: '🇹🇭', 4: '🇹🇭', 5: '🇹🇭',  // Bangkok
  6: '🇯🇵', 7: '🇯🇵', 8: '🇯🇵', 9: '🇯🇵',  // Okinawa
  10: '🇯🇵', 11: '🇯🇵', 12: '🇯🇵', 13: '🇯🇵', 14: '🇯🇵', 15: '🇯🇵',  // Shikoku/Kobe/Osaka
  16: '🇰🇷', 17: '🇰🇷', 18: '🇰🇷', 19: '🇰🇷', 20: '🇰🇷'  // Seoul
};

// Kanji-sottotitoli per ogni fase
const phaseKanji = {
  phase1: 'タイ • Thailandia',
  phase2: '沖縄 • Okinawa',
  phase3: '日本本土 • Honshū & Shikoku',
  phase4: '大阪 • Osaka',
  phase5: '韓国 • Corea'
};

const phaseColors = {
  phase1: '#8B0000',  // Rosso scuro cinese - Thailandia
  phase2: '#0EA5E9',  // Blu oceano - Okinawa
  phase3: '#C9A84C',  // Oro - Shikoku/Kobe
  phase4: '#FF6B6B',  // Corallo - Osaka
  phase5: '#2C2C2C'   // Nero - Corea
};

const phaseNames = {
  phase1: 'Bangkok',
  phase2: 'Okinawa',
  phase3: 'Shikoku & Kobe',
  phase4: 'Osaka',
  phase5: 'Seul'
};

const phaseIcons = {
  phase1: '🇹🇭',
  phase2: '🏝️',
  phase3: '🏯',
  phase4: '🍣',
  phase5: '🌸'
};

// ==================== STATE ====================
var activePhase = 'all';
var expandedDay = null;
var checklist = {};

try { checklist = JSON.parse(localStorage.getItem('martina2026_checklist')) || {}; } catch(e) { checklist = {}; }

// ==================== TAB NAVIGATION ====================
function switchTab(tab) {
  ['home','itinerary','map','info'].forEach(function(t) {
    var btn = document.getElementById('tab-' + t);
    if (btn) btn.className = 'tab-btn' + (t === tab ? ' active' : '');
  });
  ['home','itinerary','map','info'].forEach(function(t) {
    var nav = document.getElementById('nav-' + t);
    if (nav) nav.className = 'nav-btn' + (t === tab ? ' active' : '');
  });
  ['home','itinerary','map','info'].forEach(function(t) {
    var p = document.getElementById('panel-' + t);
    if (p) p.style.display = (t === tab) ? '' : 'none';
  });

  if (tab === 'map' && !window._leafletMap) {
    setTimeout(function() { initMap(); }, 100);
  }
  if (tab === 'map' && window._leafletMap) {
    setTimeout(function() { window._leafletMap.invalidateSize(); }, 200);
  }
  if (tab === 'itinerary') {
    setTimeout(function() { renderDayGrid(); }, 50);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== COUNTDOWN ====================
function updateCountdown() {
  var target = new Date('2026-07-18T21:15:00+02:00');
  var now = new Date();
  var diff = target - now;

  var el = document.getElementById('countdown-label');
  var dEl = document.getElementById('cd-days');
  var hEl = document.getElementById('cd-hours');
  var mEl = document.getElementById('cd-mins');

  if (diff <= 0) {
    el.textContent = '🎉 IN VIAGGIO! 頑張って!';
    dEl.textContent = '🌸'; hEl.textContent = '🌸'; mEl.textContent = '🌸';
    return;
  }

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  el.textContent = 'Partenza: 18 Lug 2026, ore 21:15 da MXP ✈️';
  dEl.textContent = days;
  hEl.textContent = String(hours).padStart(2, '0');
  mEl.textContent = String(mins).padStart(2, '0');
}

// ==================== PHASE PILLS ====================
function renderPhasePills() {
  var container = document.getElementById('phase-pills');
  if (!container) return;
  container.innerHTML = '';

  var allBtn = document.createElement('button');
  allBtn.className = 'phase-pill' + (activePhase === 'all' ? ' active' : '');
  if (activePhase === 'all') allBtn.style.backgroundColor = '#8B0000';
  allBtn.textContent = '🌸 Tutti';
  allBtn.onclick = function() { filterPhase('all'); };
  container.appendChild(allBtn);

  var phases = ['phase1','phase2','phase3','phase4','phase5'];
  phases.forEach(function(pid) {
    var btn = document.createElement('button');
    btn.className = 'phase-pill' + (activePhase === pid ? ' active' : '');
    if (activePhase === pid) btn.style.backgroundColor = phaseColors[pid];
    btn.textContent = phaseIcons[pid] + ' ' + phaseNames[pid];
    btn.onclick = function() { filterPhase(pid); };
    container.appendChild(btn);
  });
}

function filterPhase(pid) {
  activePhase = (activePhase === pid) ? 'all' : pid;
  expandedDay = null;
  renderPhasePills();
  renderDayGrid();
  backToDayGrid();
}

// ==================== HOME PHASES ====================
function renderHomePhases() {
  var container = document.getElementById('home-phases');
  if (!container) return;
  container.innerHTML = '';

  phasesData.forEach(function(p) {
    var div = document.createElement('div');
    div.className = 'home-phase';
    div.onclick = function() {
      activePhase = p.id;
      switchTab('itinerary');
      renderPhasePills();
      renderDayGrid();
    };
    div.innerHTML = '<div class="home-phase-icon">' + p.icon + '</div>' +
      '<div class="home-phase-text">' +
        '<div class="home-phase-title">' + p.title + '</div>' +
        '<div class="home-phase-sub">Giorni ' + p.days + ' — ' + p.desc + '</div>' +
      '</div>' +
      '<div class="home-phase-arrow">›</div>';
    container.appendChild(div);
  });
}

// ==================== DAY GRID ====================
function renderDayGrid() {
  var container = document.getElementById('day-grid');
  if (!container) return;
  container.innerHTML = '';

  var filtered = itineraryData;
  if (activePhase !== 'all') {
    filtered = itineraryData.filter(function(d) { return d.phaseId === activePhase; });
  }

  filtered.forEach(function(d) {
    var idx = itineraryData.indexOf(d);
    var color = phaseColors[d.phaseId] || '#8B0000';
    var flag = dayFlags[d.day] || '🌸';

    var tile = document.createElement('div');
    tile.className = 'day-tile';
    tile.onclick = function() { selectDayByIdx(idx); };

    var bg = document.createElement('div');
    bg.className = 'day-tile-bg';
    var svg = mangaSVGs[d.day];
    if (svg) {
      bg.style.background = 'linear-gradient(135deg, ' + color + 'CC 0%, ' + color + '99 100%)';
      var svgImg = document.createElement('img');
      svgImg.src = 'data:image/svg+xml,' + encodeURIComponent(svg);
      svgImg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;opacity:.65';
      tile.insertBefore(svgImg, tile.firstChild);
    } else {
      bg.style.background = 'linear-gradient(135deg, ' + color + 'CC 0%, ' + color + '99 100%), repeating-linear-gradient(45deg, transparent 0, transparent 18px, rgba(201,168,76,0.08) 18px, rgba(201,168,76,0.08) 19px)';
    }
    tile.appendChild(bg);

    var overlay = document.createElement('div');
    overlay.className = 'day-tile-overlay';
    tile.appendChild(overlay);

    // Flag in top-right corner
    var flagEl = document.createElement('div');
    flagEl.className = 'day-tile-flag';
    flagEl.textContent = flag;
    tile.appendChild(flagEl);

    var content = document.createElement('div');
    content.className = 'day-tile-content';
    content.innerHTML = '<div class="day-tile-num">⛩️ Giorno ' + d.day + '</div><div class="day-tile-title">' + d.title + '</div>';
    tile.appendChild(content);

    container.appendChild(tile);
  });
}

function selectDayByIdx(idx) {
  var d = itineraryData[idx];
  if (!d) return;

  var area = document.getElementById('day-detail-area');
  if (!area) return;

  var color = phaseColors[d.phaseId] || '#8B0000';
  var flag = dayFlags[d.day] || '🌸';
  var kanjiSubtitle = phaseKanji[d.phaseId] || '';

  var html = '<button class="day-back-btn" onclick="backToDayGrid()">‹ Torna ai giorni</button>';
  html += '<div class="day-card expanded">';

  // Header bar
  html += '<div class="day-header" style="cursor:default;border-bottom:1px solid rgba(201,168,76,0.2)">';
  html += '<span class="day-badge" style="background:' + color + '">G' + d.day + '</span>';
  html += '<div class="day-info">';
  html += '<div class="day-title">' + flag + ' ' + d.title + '</div>';
  html += '<div class="day-meta">' + d.date + ' • ' + d.region + '</div>';
  html += '</div>';
  html += '</div>';

  // Close bar
  html += '<div class="day-close-bar">';
  html += '<button class="day-close-btn" onclick="backToDayGrid()">✕ Chiudi</button>';
  html += '<a href="' + d.gmaps + '" target="_blank" rel="noopener" class="day-gmaps-btn">🗺️ Google Maps</a>';
  html += '</div>';

  // Manga illustration
  var svg = mangaSVGs[d.day];
  if (svg) {
    html += '<div style="margin:0 -14px 12px;height:180px;overflow:hidden;border-radius:8px;background:' + color + '15">';
    html += '<img src="data:image/svg+xml,' + encodeURIComponent(svg) + '" style="width:100%;height:100%;object-fit:cover;opacity:.8">';
    html += '</div>';
  }

  // Kanji subtitle
  html += '<div class="day-kanji-subtitle">' + kanjiSubtitle + '</div>';

  // Content
  html += '<div class="day-detail-inner">' + renderDayContent(d) + '</div>';
  html += '</div>';

  // Bottom back button
  html += '<div style="text-align:center;padding:18px 0 8px">';
  html += '<button onclick="backToDayGrid()" style="background:linear-gradient(135deg,#8B0000,#5C0A0A);color:#FFF8E7;border:1px solid #C9A84C;border-radius:12px;padding:12px 28px;font-size:13px;font-weight:700;font-family:Georgia,serif;cursor:pointer;box-shadow:0 2px 8px rgba(139,0,0,0.3);letter-spacing:1px">‹ Torna ai giorni</button>';
  html += '</div>';

  var grid = document.getElementById('day-grid');
  if (grid) grid.style.display = 'none';
  var pills = document.getElementById('phase-pills');
  if (pills) pills.style.display = 'none';
  area.innerHTML = html;
  area.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToDayGrid() {
  var area = document.getElementById('day-detail-area');
  if (area) area.innerHTML = '';
  var grid = document.getElementById('day-grid');
  if (grid) grid.style.display = '';
  var pills = document.getElementById('phase-pills');
  if (pills) pills.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

var renderDaysList = renderDayGrid;
var populateDaySelector = renderDayGrid;

function renderDayContent(d) {
  var links = linksData[d.day] || {};

  var routeUrl = links.routeGmaps || d.gmaps;
  var routeLabel = links.routeGmaps ? '🗾 PERCORSO SU GOOGLE MAPS' : '🗾 APRI SU GOOGLE MAPS';

  var hotelHTML = d.hotel;
  if (links.hotelGmaps) {
    hotelHTML = '<a href="' + links.hotelGmaps + '" target="_blank" rel="noopener" style="color:#8B0000;font-weight:700">' + d.hotel + '</a>';
  }

  var rentalHTML = '';
  if (links.rentalGmaps || links.rentalReturnGmaps) {
    rentalHTML = '<div style="background:rgba(201,168,76,0.08);padding:10px;border-radius:8px;border:1px solid rgba(201,168,76,0.25);font-size:11px;margin-bottom:10px">';
    if (links.rentalGmaps) rentalHTML += '🚗 <strong>Transfer/Pickup:</strong> <a href="' + links.rentalGmaps + '" target="_blank" style="color:#8B0000;font-weight:700">' + (links.rentalGmapsLabel || 'Google Maps') + '</a><br>';
    if (links.rentalReturnGmaps) rentalHTML += '🔑 <strong>Drop-off:</strong> <a href="' + links.rentalReturnGmaps + '" target="_blank" style="color:#8B0000;font-weight:700">' + (links.rentalReturnGmapsLabel || 'Google Maps') + '</a>';
    rentalHTML += '</div>';
  }

  var parkingHTML = '';
  if (links.parking) {
    parkingHTML = '<div class="detail-box"><div class="detail-title">🅿️ Logistica & Spostamenti</div><div class="detail-text">' + links.parking + '</div>';
    if (links.parkingCost) parkingHTML += '<div style="margin-top:6px;font-size:10px;color:#888">💵 Costo: <strong>' + links.parkingCost + '</strong></div>';
    if (links.parkingGmaps && links.parkingGmaps.length > 0) {
      parkingHTML += '<div style="margin-top:8px">';
      links.parkingGmaps.forEach(function(p) {
        parkingHTML += '<a href="' + p.url + '" target="_blank" style="display:flex;align-items:center;gap:4px;font-size:11px;color:#8B0000;font-weight:700;margin:3px 0;padding:2px 0">📍 ' + p.name + '</a>';
      });
      parkingHTML += '</div>';
    }
    parkingHTML += '</div>';
  }

  var transferHTML = '';
  if (d.transferInfo) {
    transferHTML = '<details style="background:rgba(139,0,0,0.04);padding:10px;border-radius:8px;border:1px solid rgba(139,0,0,0.15);margin-bottom:10px"><summary style="font-size:11px;font-weight:700;color:#8B0000;cursor:pointer">🚗 Indicazioni Transfert</summary><div style="font-size:11px;line-height:1.6;color:#555;margin-top:8px">' + d.transferInfo + '</div></details>';
  }

  var foodItems = '';
  if (d.food) {
    d.food.forEach(function(f) { foodItems += '<div class="food-item"><span class="food-dot">❀</span>' + f + '</div>'; });
  }
  var marketItems = '';
  if (d.supermarkets) {
    d.supermarkets.forEach(function(s) { marketItems += '<span class="market-tag">' + s + '</span> '; });
  }

  var html = '';

  // Stats grid
  html += '<div class="stats-grid">';
  html += '<div class="stat-box"><div class="stat-label">Distanza</div><div class="stat-value terracotta">🚗 ' + d.km + ' km</div></div>';
  html += '<div class="stat-box"><div class="stat-label">Tempo</div><div class="stat-value" style="font-size:11px">⏱️ ' + d.time + '</div></div>';
  html += '<div class="stat-box"><div class="stat-label">Alba</div><div class="stat-value sage">🌅 ' + d.sunrise + '</div></div>';
  html += '<div class="stat-box"><div class="stat-label">Tramonto</div><div class="stat-value coral">🌇 ' + d.sunset + '</div></div>';
  html += '</div>';

  // Timezone
  html += '<div class="tz-bar">⏰ <strong>Fuso orario:</strong> ' + d.fuso + '</div>';

  // Route button
  html += '<a href="' + routeUrl + '" target="_blank" rel="noopener" class="route-btn">' + routeLabel + '</a>';

  // Description
  html += '<div class="detail-box"><div class="detail-title">🎌 Programma del giorno</div><div class="detail-text">' + d.desc + '</div></div>';

  html += parkingHTML;
  html += rentalHTML;
  html += transferHTML;

  // Food & Markets
  html += '<div class="food-grid">';
  html += '<div class="food-box food-sage"><div class="food-title sage">🍜 Cibo & Ristoranti</div>' + foodItems + '</div>';
  html += '<div class="food-box food-gold"><div class="food-title gold">🛒 Supermercati & Store</div>' + marketItems + '</div>';

  // Bonus
  var bonusItems = '';
  if (d.bonus) {
    d.bonus.forEach(function(b) { bonusItems += '<div style="padding:4px 0">✨ ' + b + '</div>'; });
  }
  if (bonusItems) {
    html += '<div class="food-box" style="margin-top:8px;background:#FFF8E7;border:1px solid rgba(201,168,76,0.3);grid-column:1/-1"><div class="food-title" style="color:#8B6914">🌟 Da non perdere</div>' + bonusItems + '</div>';
  }
  html += '</div>';

  // Hotel
  html += '<div class="hotel-row">🏨 <strong>Alloggio:</strong> ' + hotelHTML + '</div>';

  return html;
}

// ==================== CHECKLIST ====================
function initChecklist() {
  renderChecklistList('checklist-docs', checklistData.docs, 'docs');
  renderChecklistList('checklist-parks', checklistData.parks, 'parks');
  renderChecklistList('checklist-food', checklistData.food, 'food');
  updateChecklistProgress();
}

function renderChecklistList(containerId, items, category) {
  var container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  items.forEach(function(item, i) {
    var key = category + '_' + i;
    var checked = checklist[key] === true;
    var li = document.createElement('li');
    li.className = 'checklist-item' + (checked ? ' done' : '');
    li.innerHTML = '<input type="checkbox" id="' + key + '"' + (checked ? ' checked' : '') + '><label for="' + key + '"' + (checked ? ' style="text-decoration:line-through;opacity:0.5"' : '') + '>' + item + '</label>';
    li.querySelector('input').onchange = function() {
      checklist[key] = this.checked;
      localStorage.setItem('martina2026_checklist', JSON.stringify(checklist));
      initChecklist();
    };
    container.appendChild(li);
  });
}

function updateChecklistProgress() {
  var total = checklistData.docs.length + checklistData.parks.length + checklistData.food.length;
  var done = 0;
  for (var k in checklist) { if (checklist[k] === true) done++; }
  var el = document.getElementById('checklist-progress');
  if (el) el.textContent = done + '/' + total + ' completati';
}

function resetChecklist() {
  if (confirm('Cancellare tutta la checklist?')) {
    checklist = {};
    localStorage.removeItem('martina2026_checklist');
    initChecklist();
  }
}

// ==================== MAP ====================
// Coordinate di tutte le tappe (fornite nella richiesta)
var mapStops = [
  { day: 1, label: "Milano (Partenza)", lat: 45.4642, lng: 9.1900, phase: "phase1" },
  { day: 1, label: "Delhi (Scalo)", lat: 28.6139, lng: 77.2090, phase: "phase1" },
  { day: 2, label: "Bangkok", lat: 13.7563, lng: 100.5018, phase: "phase1" },
  { day: 6, label: "Okinawa / Naha", lat: 26.3344, lng: 127.6850, phase: "phase2" },
  { day: 10, label: "Takamatsu", lat: 34.3405, lng: 134.0433, phase: "phase3" },
  { day: 11, label: "Naoshima", lat: 34.4905, lng: 133.9944, phase: "phase3" },
  { day: 12, label: "Kobe", lat: 34.6901, lng: 135.1956, phase: "phase3" },
  { day: 14, label: "Osaka", lat: 34.6937, lng: 135.5023, phase: "phase4" },
  { day: 16, label: "Seul", lat: 37.5665, lng: 126.9780, phase: "phase5" },
  { day: 20, label: "Milano (Ritorno)", lat: 45.4642, lng: 9.1900, phase: "phase5" }
];

function initMap() {
  var mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') {
    if (mapEl) mapEl.style.display = 'none';
    var fb = document.getElementById('map-fallback');
    if (fb) fb.style.display = 'block';
    return;
  }

  try {
    var map = L.map('map').setView([35, 90], 4);
    window._leafletMap = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 19
    }).addTo(map);

    // Phase routes (color-coded)
    var phases = ['phase1','phase2','phase3','phase4','phase5'];
    phases.forEach(function(pid) {
      var points = mapStops.filter(function(s) { return s.phase === pid; });
      if (points.length >= 2) {
        var latlngs = points.map(function(p) { return [p.lat, p.lng]; });
        L.polyline(latlngs, { color: phaseColors[pid], weight: 4, opacity: 0.75, dashArray: pid === 'phase1' || pid === 'phase5' ? null : '8, 6' }).addTo(map);
      }
    });

    // Full route (subtle, behind colored phase routes)
    var allLatlngs = mapStops.map(function(s) { return [s.lat, s.lng]; });
    L.polyline(allLatlngs, { color: '#2C2C2C', weight: 1.5, opacity: 0.25, dashArray: '4, 8' }).addTo(map);

    // Markers
    mapStops.forEach(function(stop, idx) {
      var color = phaseColors[stop.phase];
      var icon = L.divIcon({
        className: '',
        html: '<div style="background:' + color + ';color:#FFF8E7;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;border:2px solid #C9A84C;box-shadow:0 2px 8px rgba(139,0,0,0.4);font-family:Georgia,serif">' + (idx + 1) + '</div>',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });
      L.marker([stop.lat, stop.lng], { icon: icon }).addTo(map).bindPopup('<strong>Tappa ' + (idx + 1) + '</strong><br>' + stop.label);
    });

    map.fitBounds(allLatlngs, { padding: [50, 50] });
  } catch(e) {
    console.warn('Map failed:', e);
    mapEl.style.display = 'none';
    var fb = document.getElementById('map-fallback');
    if (fb) fb.style.display = 'block';
  }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function() {
  updateCountdown();
  setInterval(updateCountdown, 60000);
  switchTab('home');
  renderHomePhases();
  renderPhasePills();
  renderDayGrid();
  initChecklist();
});
