
import ArtistSwiper from "../components/mySwiper";

import MarqueePhoto from "../components/MarqueePhoto";
import MemorySwiper from "../components/MemorySwiper";
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import FloatingButton from "../components/WalletKun";

export default function SpotlightPage() {


  
  const sponsors = [
    "Spotlight/Sponsors_1.png",
    "Spotlight/Sponsors_2.png",
    "Spotlight/Sponsors_3.png",
    "Spotlight/Sponsors_4.png",
    "Spotlight/Sponsors_5.png",
    "Spotlight/Sponsors_6.png",
    "Spotlight/Sponsors_7.png",
    "Spotlight/Sponsors_8.png",
    "Spotlight/Sponsors_9.png",
  ];



    

  return (
    <>
    <SpotlightCard spotlightColor="rgba(222, 32, 32, 0.34)" className="w-100">
      <div className="spotlight-banner mt-bp-140-0 d-flex align-items-center">
        
        <div className="spotlight-banner-text text-center w-100">
          <h1 className="fs-15 fw-900 text-primary-800">藝展聚光燈</h1>
          <h3 className="fs-6 fw-400 text-primary-800 mt-2">
            透過藝術特寫、會員投稿與回顧特寫，感受展覽的每一份感動。
          </h3>
        </div>
        
      </div>
      </SpotlightCard>

      <section className="overflow-hidden">
        <div className="spotlight-card d-flex flex-column">
          <div className="spotlight-card-title d-inline-flex me-auto">
            <div className="spotlight-card-topic fw-700">藝術特寫</div>

            <div className="spotlight-card-title-info">
              不定期推出藝術家或策展人的專訪，一窺展覽背後的故事
            </div>
          </div>

          <div className="spotlight-card-info">
            <div className="container d-flex flex-column">
              <div className="spotlight-card-tag">#藝術家專訪</div>
              <div className="spotlight-card-subtitle fs-8 fw-700 mb-10">
                釋放內心的小野獸 插畫家陳純虹勇敢畫下自己的《戀物癖》
              </div>

              <div className="artist-spotlight-card-content d-flex gap-15">
                <div className="spotlight-card-content-text d-flex flex-column">
                  <p className="fs-5">
                    「我是浸潤在日本次文化下長大的。」
                    起源於8、90年代的流行名詞「哈日族」，是許多7年級生共同的回憶，那些曾經風行青少年間的傑尼斯、帕妃、SPEED等偶像明星，以及美少女戰士、幽遊白書和灌籃高手等動漫畫，這些次文化就像被嚥下的食物，經由消化早已流淌於身體中，化為骨血的一部分，是共同語言、也是大無畏的少年時代無可取代的回憶。
                    7年級後段班的插畫家Eszter
                    Chen陳純虹，在2017年年初受邀為Apple官網繪製新年桌布，是台灣第一位獲邀的插畫家，當我們問起創作靈感，正好經歷「哈日族」次文化高峰的她說：「那些偶像周邊產品，或是長輩從日本帶回來的糖果餅乾，都被顏色鮮明的包裝或插圖給包裹，每次拿到我都覺得好幸福」，深受日本次文化的衝擊，經過累積與內化，陳純虹的作品色彩飽和而強烈，沒有光源與陰影，超平面的構圖概念，描繪出卡通式的可愛詼諧，彷彿帶領著觀賞者的思緒穿越時光隧道，再次回到日本次文化流行高峰之時。
                  </p>
                  <div>
                    <button className="mt-8 btn">了解更多</button>
                  </div>
                </div>
                <div className="spotlight-card-content-img bg-secondary-50">
                  
                  <ArtistSwiper />
                </div>
              </div>
              <div className="d-flex justify-content-center mb-17">
                <button
                  type="button"
                  className="btn btn-gray-700 spotlight-button mt-8 px-6 py-4"
                >
                  查看全部藝術特寫
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="spotlight-card d-flex flex-column">
          <div className="spotlight-card-title d-inline-flex ms-auto">
            <div className="spotlight-card-topic fw-700">會員投稿</div>

            <div className="spotlight-card-title-info fw-500">
              逛展的感動不只留給自己，拉更多人一起入坑展覽的美好世界吧！
            </div>
          </div>

          <div className="spotlight-card-info">
            <div className="container d-flex flex-column">


              

              <div className="spotlight-card-content d-flex gap-15 flex-column px-15 mail">
                <div className="spotlight-card-content-text-member-mail d-flex flex-column mail-letter">
                  <div className="mb-8">
                    <h3>復古奇幻：細膩插畫與水彩創作的魅力</h3>
                  </div>
                  <p className="fs-5">
                    第一眼看到她的作品，就被細膩的畫風還有時不時出現的可愛角色所吸引。展出的畫作都很耐看，即使先快速看過一遍，還是可以再觀察畫中的細節，我常常忍不住貼近仔細看她細緻的排線。
                    <br />
                    <br />
                    在畫風上有一種復古的感覺，畫作中帶有細膩的墨水筆觸很像十九世紀歐洲的插畫風格，此外常出現的花草元素，讓我想到新藝術風格也常以花朵作為裝飾，為作品增添了一些活力跟少女的感覺。
                    <br />
                    <br />
                    雖然畫風看起來復古，但畫作內容又是各種超現實的奇怪生物，這種復古＋奇幻＋可愛混合的創作風格實在很吸引人。在網路上的受訪資料中，也可以看到她受到藝術家達利（Dali）、喬治歐·德·奇里訶（Chirico）和耶羅尼米斯·范阿肯（Bosch）的影響。
                    <br />
                    <br />
                    除了插畫外，我也很喜歡她繪製的藝術字體，將富有風格的插圖與文字結合，充滿趣味的同時也拓展她可以觸及的創作範圍。
                    <br />
                    <br />
                    將名字搭配她常用的兩種風格做詮釋，真是太帥啦
                    <br />
                    <br />
                    創作手法上，她也會使用水彩作為上色的媒材，在展覽中有展出她與好賓（Holbein）聯名所繪製的管裝顏料插圖，也有一些她在上色時顏料調和的筆記。在不同的展出作品中，可以發現到她也不全然只用代針筆創作，有時候也會有水彩＋鉛筆的作品，呈現出不同的感覺。
                    <br />
                    <br />
                    在展覽的紀念品商店中，還可以看到出現在展覽中的聯名款 108
                    色專家級水彩，要價15600台幣 （這...買了會捨不得用吧？）
                    <br />
                    <br />
                    窺探世界觀：可愛的角色與繪本
                    <br />
                    整個展覽可以感覺到分佈在不同作品中連貫的世界觀。在逛展覽時，角色會一直重複出現在不同主題的作品中，就像交朋友一樣，到最後也越來越認識這些角色們。
                    <br />
                    <br />
                    這種感覺就像樋口裕子曾經在訪談中所談及的：
                    <br />
                    「（前略）我希望不只是展示畫作，而是希望做成一個故事，讓客人能進入那個世界裡，進而能享受展覽。GUSTAVE君本身已經在我的心中，所以進展也非常順利。」（出處）
                    <br />
                    展區中有一個區塊是擷取繪本中的畫作，透過繪本的方式更可以看到角色背後的故事背景為何，如閱讀完繪本世界上最棒的貓，可以更認識布偶貓這個角色的成長故事。如果有看完展覽的話，強烈建議可以到紀念品商店或找其他管道去翻翻看這些繪本，可以更了解這些角色（雖然展區的原稿上面有寫一些日文對話，但大部分的台灣人應該都看不懂吧？）。
                    <br />
                    其他我特別喜歡的一點是樋口裕子會在不同展覽的票根上玩角色接力，上一個展覽的票上出現的角色，會伴隨著另一個角色出現在下ㄧ個展覽的票根上，這種小巧思也可以感覺到她的用心。
                    <br />
                    <br />
                    充滿執念的縫合狂魔
                    <br />
                    「章魚很神祕又美麗我很喜歡。菇類寄生後又與回家的生物共生，這個部分我很有興趣也感受到魅力。」（出處）
                    <br />
                    在展出的畫作中，除了固定的幾個角色外，常常有反覆出現的象徵圖像，像是心臟、章魚、香菇等等，因為實在太常出現了，可以感受到作者的執念，而且這些東西還會跟不同的動植物融合，蹦出新滋味。
                  </p>
                  <br />
                  <br />
                  <br />

                  <p className="fs-5 mb-15">展覽中最吸睛可愛的 GUSTAVE 君</p>
                  <br />
                  <br />
                  <br />
                </div>
                {/* <img
                    className="position-absolute mail-letter"
                    src="Spotlight/mail_back.png"
                    alt="mail_back.png"

                  /> */}
              </div>

              {/* <img
                    className="position-absolute mail-letter"
                    src="Spotlight/mail_back.png"
                    alt="mail_back.png"

                  /> */}
              

              <div className="d-flex justify-content-center my-20">
                <button
                  type="button"
                  className="btn btn-gray-700 spotlight-button px-6 py-4"
                >
                  查看全部藝術特寫
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="spotlight-card d-flex flex-column">
          <div className="spotlight-card-title d-inline-flex me-auto">
            <div className="spotlight-card-topic fw-700">回顧精彩</div>

            <div className="spotlight-card-title-info fw-500">
              重溫展覽的精彩時刻
            </div>
          </div>

          <div className="spotlight-card-info  pb-20">

            <MemorySwiper />
          </div>
        </div>

        <div className="spotlight-card mb-17 d-flex flex-column">
          <div className="spotlight-card-title d-inline-flex ms-auto">
            <div className="spotlight-card-topic fw-700">合作夥伴</div>

            <div className="spotlight-card-title-info fw-500">
              歡迎成為合作夥伴，讓展覽融入日常，讓藝術觸手可及
            </div>
          </div>

          <div className="spotlight-card-info">
            <div className="py-22">

              <MarqueePhoto images={sponsors} /> 
              
            </div>
            

          </div>


        </div>
      </section>
      <FloatingButton/>  
    </>
  );
}
