function avatarDropAnswer(){
let htmlAnswer = "<p class='titleMidtest'>Danh sách các loại avatar drop từ boss</p><br><table class='table table-hover table-bordered table-striped'>" +
    "<tr><th scope='col' class='text-center'>Tên Boss <i class=\"fab fa-grunt\"></i></th><th scope='col' class='text-center'>Level <i class=\"fas fa-level-up-alt\"></i></th><th scope='col' class='text-center'>Vị trí<i class=\"fas fa-search-location\"></i></th><th scope='col' class='text-center'>Teleport tiêu tốn <i class=\"fas fa-comment-dollar\"></i></th><th scope='col' class='text-center'>Drop <i class=\"fas fa-box-open\"></i></th><th scope='col' class='text-center'>Avatar Drop <i class=\"fas fa-tshirt\"></i></th></tr>"+
    "<tr><td scope='row'>Oppressive Goblin Troll</td><td>Lv 10</td><td>Hang Cave of Bewilderness</td><td>1,000g</td><td>Trang bị và vũ khí Level 8</td><td>Mascot (Hóa trang gấu killer)</td></tr>"+
    "<tr><td scope='row'>Cross-border Heteropoda</td><td>Lv 18</td><td>Hang Cave of Howling Peak</td><td>3,000g</td><td>Trang bị và vũ khí Level 24</td><td>Diver (Bộ đồ lặn)</td></tr>"+
    "<tr><td scope='row'>Big Eater Heteropoda</td><td>Lv 23</td><td>Hang Spider Thread Cave</td><td>3,200g</td><td>Trang bị và vũ khí Level 21</td><td>Fireman (Lính cứu hỏa)</td></tr>"+
    "<tr><td scope='row'>Raging Minotaur</td><td>Lv 26</td><td>Hang Flash Cave</td><td>3,200g</td><td>Trang bị và vũ khí Level 26</td><td>Thug (Đầu gấu giang hồ)</td></tr>"+
    "<tr><td scope='row'>Eternal Cerberus</td><td>Lv 31</td><td>Hang Cave of Gob Golin</td><td>4,800g</td><td>Trang bị và vũ khí Level 30</td><td>Ninja/Konoichi (Set ninja truyền thống cho nam và nữ)</td></tr>"+
    "<tr><td scope='row'>Passionate Cerberus</td><td>Lv 36</td><td>Hang Cave Hinarigaoka</td><td>5,250g</td><td>Trang bị level 36 và vũ khí Level 33</td><td>Samurai</td></tr>"+
    "<tr><td scope='row'>Rainy Night Heteropoda</td><td>Lv 39</td><td>Cave of Echo Valley</td><td>6,400g </td><td>Trang bị Level 36 và vũ khí Level 33</td><td>LRR</td></tr>"+
    "<tr><td scope='row'>Daunting Master Rat</td><td>Lv 26</td><td>Trạm xe điện Subway Platform</td><td>5,000g</td><td>Trang bị Level 40 và vũ khí Level 39</td><td>BWT Troop (Quân sự BWT- Tương tự npc lính)</td></tr>"+
    "<tr><td scope='row'>Chaos Cerberus</td><td>Lv 44</td><td>Hang Cave of Undead Tramp</td><td>3,200g</td><td>Trang bị Level 40 và vũ khí Level 35</td><td>Mascot (Hóa trang gấu killer)</td></tr>"+
    "<tr><td scope='row'>Cặp đôi troll: Impure Goblin Troll-Bro, Impure Goblin Troll-Sis</td><td>Lv 45/43</td><td>Hang Tunnel 1</td><td>9,700g</td><td>Trang bị Level 40,18 và vũ khí Level 35</td><td>Rider (Đua xe)</td></tr>"+
    "<tr><td scope='row'>Giant Serpentray</td><td>Lv 47</td><td>Hang Cave of Heavy Python</td><td>10,600g</td><td>Trang bị Level 45 và vũ khí Level 43</td><td>Kabuki (Nhạc kịch JP)</td></tr>"+
    "<tr><td scope='row'>Gross Eater Heteropoda</td><td>Lv 47</td><td>Hang Cave of Gross Oil</td><td>9,000g</td><td>Trang bị Level 40 và vũ khí Level 37</td><td>Native (Thổ dân)</td></tr>"+
    "<tr><td scope='row'>Loyal Shogun Skeleton</td><td>Lv 49</td><td>Trong Sewerage 3</td><td>12,000g</td><td>Trang bị Level 45 và vũ khí Level 48</td><td>Vampire</td></tr>"+
    "<tr><td scope='row'>Ruined Cerberus</td><td>Lv 50</td><td>Hang Tunnel 2</td><td>9,400g</td><td>Trang bị Level 40 và vũ khí Level 37</td><td>Convict (Tù nhân)</td></tr>"+
    "<tr><td scope='row'>Kasbah</td><td>Lv 52</td><td>Trong Kasuba Water Plant 3</td><td>9,000g</td><td>Trang bị Level 49 và vũ khí Level 48</td><td>Native (Thổ dân)</td></tr>"+
    "<tr><td scope='row'>Oust Serpentray</td><td>Lv 55</td><td>Hang Highway Cave</td><td>10,600g</td><td>Trang bị Level 49 và vũ khí Level 48</td><td>Pirate (Cướp biển)</td></tr>"+
    "<tr><td scope='row'>Boss Bat</td><td>Lv 57</td><td>Hang Rural Cave</td><td>15,300g</td><td>Trang bị Level 54 và vũ khí Level 54</td><td>H-Ninja</td></tr>"+
    "<tr><td scope='row'>Tengu Squad Leader</td><td>Lv 59</td><td>Mt O Near Top</td><td>10,400g</td><td>Trang bị Level 54 và vũ khí Level 54</td><td>Ying Yang (Pháp sư)</td></tr>"+
    "<tr><td scope='row'>Ferberus</td><td>Lv 60</td><td>Hang Ruins Escape Route</td><td>21,412g</td><td>Trang bị Level 54 và vũ khí Level 54</td><td>Ninja</td></tr>"+
    "<tr><td scope='row'>Kyubi Sakon, Kyubi Ukon</td><td>Lv 60</td><td>Lăng mộ Catacombe B2F</td><td>9,000g</td><td>Trang bị Level 59 và vũ khí Level 59</td><td>Business Seeker (Bộ vest tìm việc)</td></tr>"+
    "<tr><td scope='row'>Tengu Faux Slime</td><td>Lv 65</td><td>Mt O Animal Trail</td><td>21,000g</td><td>Trang bị Level 59 và vũ khí Level 65</td><td>Ronin (Samurai mất chủ)</td></tr>"+
    "<tr><td scope='row'>RESERVED For Zombies (Giết đủ số lượng bầy zombie)</td><td>???</td><td>Hang Chaos of the Dead</td><td>20,300g</td><td>Trang bị Level 68 và vũ khí Level 65</td><td>Convict (Tù nhân)</td></tr>"+
    "<tr><td scope='row'>Agitated Rock Biter</td><td>Lv 69</td><td>Hang Grotto</td><td>15,000g</td><td>Trang bị Level 65 và vũ khí Level 68</td><td>Ninja</td></tr>"+
    "<tr><td scope='row'>Mine Foreman Zombie</td><td>Lv 72</td><td>Hang Catwalk</td><td>16,600g</td><td>Trang bị Level 65 và vũ khí Level 70</td><td>Hockey (Cầu thủ khúc côn cầu)</td></tr>"+
    "<tr><td scope='row'>Nihilistic Gnome</td><td>Lv 73</td><td>Hang Thick Fog Cave</td><td>13,000g</td><td>Trang bị Level 65 và vũ khí Level 72</td><td>LRR</td></tr>"+
    "<tr><td scope='row'>Gloomy Mojaggy</td><td>Lv 73</td><td>Hang Pitch Black Cave</td><td>22,700g</td><td>Trang bị Level 68 và vũ khí Level 70</td><td>Vampire</td></tr>"+
    "<tr><td scope='row'>Joyful Meat Bolus</td><td>Lv 75</td><td>Garden of Joy</td><td>68,000g</td><td>Trang bị Level 68 và vũ khí Level 75</td><td>Ying Yang (Pháp sư)</td></tr>"+
    "<tr><td scope='row'>Specter Sakon, Specter Ukon</td><td>Lv 82</td><td>Hang Spellbinded Grave</td><td>17,000g</td><td>Trang bị Level 68 và vũ khí Level 70</td><td>Kabuki (Nhạc kịch JP), Rider Mask, Clown Mask</td></tr>"+
    "<tr><td scope='row'>Poisonous MushFrog</td><td>Lv 82</td><td>Hang South Cave Layer 2</td><td>22,000g</td><td>Trang bị Level 75 và vũ khí Level 82</td><td>Clown (Chú hề)</td></tr>"+
    "<tr><td scope='row'>Tormenting Garula (Vào bằng vé Small Coin)</td><td>Lv 88</td><td>Hang South Cave Layer ?</td><td>50,000g</td><td>Trang bị Level 75 và vũ khí Level 72</td><td>???</td></tr>"+
    // "<tr><td scope='row'>Ruined Cerberus</td><td>Lv 50</td><td>Hang Tunnel 2</td><td>9,400g</td><td>Trang bị Level 40 và vũ khí Level 37</td><td>Convict (Tù nhân)</td></tr>"+
    "<p class='titleMidtest text-danger'>Note: Điều kiện để có được box chứa avatar đó là phải là box đỏ có hiệu ứng bất kì trở lên. Những loại box kém hơn sẽ không có avatar. Chúc các bạn may mắn! </p>"+
    "<br>"+
    "</table>";
    $('#guideMsgIndex').text('...');
    $('#information').html(htmlAnswer);
}