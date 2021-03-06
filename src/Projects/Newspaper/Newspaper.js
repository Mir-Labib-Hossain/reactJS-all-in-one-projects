import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Loading from "./Loading";
import Navbar from "./Navbar";
import NewsItem from "./NewsItem";
import "./Newspaper.css";
import Pagination from "./Pagination";
export default class Newspaper extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        { source: { id: null, name: "CBS Sports" }, author: "", title: "2021 World Series: Braves vs. Astros Game 3 live stream, TV channel, watch online, odds, time for MLB playoffs - CBS Sports", description: "It's tied 1-1 as the Braves play their first home game of the series", url: "https://www.cbssports.com/mlb/news/2021-world-series-braves-vs-astros-game-3-live-stream-tv-channel-watch-online-odds-time-for-mlb-playoffs/", urlToImage: "https://sportshub.cbsistatic.com/i/r/2021/10/30/da2da241-af27-422b-b1fc-52f9a21a421d/thumbnail/1200x675/abc27e0329005e4994c730317d0bd670/astros-world-series-1.png", publishedAt: "2021-10-29T23:54:00Z", content: "The Houston Astros and Atlanta Braves are set to square off Game 3 of the 2021 World Series on Friday night in Atlanta. The best-of-seven series is tied, 1-1, after Houston took Game 2 at home on Wed… [+1822 chars]" },
        { source: { id: "fox-news", name: "Fox News" }, author: "Louis Casiano", title: "Minneapolis measure to replace police department will leave voters disappointed, expert says - Fox News", description: "Minneapolis residents planning to vote in favor of a ballot measure next week that would replace the city's police department will be disappointed, according to law enforcement experts.", url: "https://www.foxnews.com/us/minneapolis-measure-police-voters", urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/AP21300695144899.jpg", publishedAt: "2021-10-29T23:30:38Z", content: "Minneapolis residents planning to vote in favor of a ballot measure next week that would replace the city's police department will be disappointed if it passes, according to law enforcement experts.\r… [+4760 chars]" },
        { source: { id: null, name: "Deadline" }, author: "Tom Tapp", title: "California Covid Positivity Increase Steepens As Newsom Warns Of Winter Surge - Deadline", description: "“This time last year,” observed California Gov. Gavin Newsom on Thursday, “we had about 4,000 cases. One month later we had 18,000 cases. One month after that, we had 54,000. “Basically,” the state saw “a tripling of cases,” he said. Newsom meant the reminder…", url: "https://deadline.com/2021/10/california-covid-positivity-increase-steepens-winter-surge-1234865155/", urlToImage: "https://deadline.com/wp-content/uploads/2021/04/AdobeStock_331123946.jpeg?w=1024", publishedAt: "2021-10-29T23:25:00Z", content: "“This time last year,” observed California Gov. Gavin Newsomon Thursday, “we had about 4,000 cases. One month later we had 18,000 cases. One month after that, we had 54,000.\r\n“Basically,” the state s… [+2569 chars]" },
        { source: { id: "politico", name: "Politico" }, author: "Eleanor Mueller", title: "Manchin upends paid leave, a benefit ‘personal to the president’ - POLITICO", description: '"We kept hearing, \'You have a Manchin problem,\'" Molly Day, executive director of Paid Leave for the U.S., said. "So we kept digging in."', url: "https://www.politico.com/news/2021/10/29/you-have-a-manchin-problem-paid-leave-tossed-aside-despite-wooing-of-wva-senator-517731", urlToImage: "https://static.politico.com/49/79/b6121ffb4635bdb3cd91b52acd28/gettyimages-1236139616-1.jpg", publishedAt: "2021-10-29T22:30:17Z", content: "Though polls show paid family leave has strong support among Democrats and Republicans, and many business groups have warmed to the idea, even it couldn't make the cut as Democratic leaders scrambled… [+5760 chars]" },
        { source: { id: "cnn", name: "CNN" }, author: "Ariane de Vogue, CNN Supreme Court Reporter", title: "Supreme Court declines to block Maine health care employee vaccine mandate - CNN", description: "The Supreme Court on Friday denied a request to block a Maine rule that requires certain health care employees to be fully vaccinated against Covid-19.", url: "https://www.cnn.com/2021/10/29/politics/maine-vaccine-mandate-supreme-court/index.html", urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/210129144107-05-scotus-exterior-file-super-tease.jpg", publishedAt: "2021-10-29T22:16:00Z", content: null },
        { source: { id: null, name: "YouTube" }, author: null, title: "Bucky Brooks breaks down Cardinals - Packers, Baker Mayfield's future, Dak Prescott I NFL I THE HERD - The Herd with Colin Cowherd", description: "Bucky Brooks joins Colin Cowherd to discuss the biggest headlines heading into Week 8, including his reaction to the Arizona Cardinals - Green Bay Packers sh...", url: "https://www.youtube.com/watch?v=Fa7TehpYoS4", urlToImage: "https://i.ytimg.com/vi/Fa7TehpYoS4/maxresdefault.jpg", publishedAt: "2021-10-29T22:14:05Z", content: null },
        { source: { id: null, name: "Deadline" }, author: "Nellie Andreeva", title: "‘Walker’ Shocker: Lindsey Morgan To Exit The CW Series This Season - Deadline", description: "EXCLUSIVE: Lindsey Morgan, the female lead opposite Jared Padalecki on the CW’s Walker, will be leaving the hit drama series during its current second season for personal reasons. Morgan, who has starred as Micki Ramirez on the CBS Studios-produced show from …", url: "https://deadline.com/2021/10/walker-lindsey-morgan-exit-micki-ramirez-season-2-cw-series-1234865144/", urlToImage: "https://deadline.com/wp-content/uploads/2021/10/Walker-5.jpg?w=1000", publishedAt: "2021-10-29T22:06:00Z", content: "EXCLUSIVE: Lindsey Morgan, the female lead opposite Jared Padalecki on the CW’s Walker, will be leaving the hit drama series during its current second season for personal reasons. Morgan, who has sta… [+2964 chars]" },
        { source: { id: null, name: "Kotaku" }, author: "Ethan Gach", title: "Nintendo Shutters California And Toronto Offices - Kotaku", description: "Employees are displaced following the closure of two of Nintendo's few North American locations", url: "https://kotaku.com/sources-nintendo-shutters-california-office-1847966405", urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f6f7f3adff270405d03a09558e7d9f3d.jpg", publishedAt: "2021-10-29T21:40:00Z", content: "Nintendo closed its California office today, displacing roughly 100 employees, sources tell Kotaku. \r\nThe Redwood City location was one of three main offices for Nintendo of America, which is headqua… [+2451 chars]" },
        { source: { id: null, name: "WRAL.com" }, author: "Tony Rice", title: "Solar flare could make aurora visible into Virginia and North Carolina on Saturday night - WRAL.com", description: "The best viewing will be under the darkest skies, from about nine minutes after sunset to before moonrise around 1:30 a.m.", url: "https://www.wral.com/solar-flare-could-make-aurora-visible-into-virginia-and-north-carolina-on-saturday-night/19950636/", urlToImage: "https://wwwcache.wral.com/asset/weather/2020/12/09/19421501/iss052e007857-DMID1-5p4xjsld8-640x480.jpg", publishedAt: "2021-10-29T21:24:00Z", content: "By Tony Rice, NASA Ambassador\r\nThe Sun released a coronal mass ejections (CME), a sudden burst of energy, on Thursday morning. This happened as magnetic fields above a sunspot twisted to the breaking… [+2217 chars]" },
        { source: { id: null, name: "Yahoo Entertainment" }, author: "Nancy Lapid", title: "Cheap antidepressant shows promise; virus can infect inner ear - Yahoo News", description: "Fluvoxamine, an inexpensive antidepressant, might help keep patients with COVID-19 from developing severe disease, according to a new study published in The ...", url: "https://news.yahoo.com/cheap-antidepressant-shows-promise-virus-212110820.html", urlToImage: "https://s.yimg.com/uu/api/res/1.2/IYa7ibaOLeWfXYvXp.00PQ--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/ba5313c5be288ebf737a1c33d2edd834", publishedAt: "2021-10-29T21:21:10Z", content: "By Nancy Lapid\r\n(Reuters) - The following is a summary of some recent studies on COVID-19. They include research that warrants further study to corroborate the findings and that have yet to be certif… [+4650 chars]" },
        { source: { id: "the-verge", name: "The Verge" }, author: "Umar Shakir", title: "M1 Pro and M1 Max 2021 MacBook Pro teardown by iFixit - The Verge", description: "iFixit teardown of the 2021 MacBook Pro shows that the battery module is removable via pull tabs. The ports, including the MagSafe, are replaceable, except for HDMI and the SD card slot.", url: "https://www.theverge.com/2021/10/29/22753063/macbook-pro-ifixit-teardown-battery-swaps-pull-tabs", urlToImage: "https://cdn.vox-cdn.com/thumbor/p3Wz4Zafp-c_4rcc-xsI_F_j6uI=/0x530:7360x4383/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22967600/MBP_M1_2021_42e3.jpg", publishedAt: "2021-10-29T20:56:04Z", content: "Pull tabs enable more successful repairs\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nThe trackpad has to be removed to reveal two of the pull … [+1678 chars]" },
        { source: { id: null, name: "CNET" }, author: "Scott Stein", title: "Meta acquires VR fitness subscription service Supernatural - CNET", description: "The Peloton-like app pairs with the Apple Watch to show your connected heart rate.", url: "https://www.cnet.com/tech/computing/meta-acquires-vr-fitness-subscription-service-supernatural/", urlToImage: "https://www.cnet.com/a/img/FHGG9R8zZ4x51lohdpCskVV18II=/1200x630/2021/10/25/f7c6950f-7378-4b85-9986-9ab8cf2c6477/hero-mr.png", publishedAt: "2021-10-29T20:30:08Z", content: "Supernatural is a popular VR fitness app for Facebook's Oculus Quest. \r\nWithin\r\nThe newly renamed Meta (previously Facebook) has big plans for fitness and the metaverse. Meta just acquired one of the… [+1831 chars]" },
        { source: { id: null, name: "Pats Pulpit" }, author: "Oliver Thomas", title: "Patriots vs. Chargers Friday injury report: Brandon King out, 14 questionable for New England - Pats Pulpit", description: "Game statuses for Sunday’s 4:05 p.m. ET matchup at SoFi Stadium.", url: "https://www.patspulpit.com/2021/10/29/22752926/new-england-patriots-vs-los-angeles-chargers-friday-injury-report-brandon-king-out-14-questionable", urlToImage: "https://cdn.vox-cdn.com/thumbor/jeE4uDiIxz3lQ52njtaq8ZdReFU=/0x0:3900x2042/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22967711/1236131327.jpg", publishedAt: "2021-10-29T20:25:49Z", content: "The New England Patriots will visit the Los Angeles Chargers without Brandon King.\r\nThe veteran special-teamer would be ruled out on Friday due to a thigh issue while an additional 14 members of the … [+1838 chars]" },
        { source: { id: null, name: "NPR" }, author: "Brendan Byrne", title: "With NASA astronauts launching on SpaceX rockets, a tradition returns: flowers. - NPR", description: "For every U.S. mission with NASA astronauts, a family from Texas has sent a bouquet of roses to NASA's Mission Control Center to show support to those who keep the astronauts safe.", url: "https://www.npr.org/2021/10/29/1050495100/astronaut-launches-are-returning-to-the-u-s-for-each-this-family-sends-nasa-rose", urlToImage: "https://media.npr.org/assets/img/2021/10/29/jsc2011e212005_orig_wide-6da13d0835c97ce381f31885271fd83317d6a53b.jpg?s=1400", publishedAt: "2021-10-29T20:21:00Z", content: "Before each mission with NASA astronauts, the Shelton family sends a bouquet of roses to the Mission Control Center at the Johnson Space Center in Houston.\r\nJames Blair/NASA\r\nNASA and private rocket … [+4637 chars]" },
        { source: { id: null, name: "Page Six" }, author: "Francesca Bacardi", title: "Gigi Hadid left Paris Fashion Week early amid Zayn Malik, Yolanda fight - Page Six", description: "The supermodel was scheduled to appear in various fashion shows but seemingly pulled out amid Malek calling her mother a “Dutch slut.”", url: "https://pagesix.com/2021/10/29/gigi-hadid-left-paris-fashion-week-early-amid-zayn-malik-drama/", urlToImage: "https://pagesix.com/wp-content/uploads/sites/3/2021/10/gigi-comp.jpg?quality=90&strip=all&w=1200", publishedAt: "2021-10-29T20:17:00Z", content: "Gigi Hadid fled Paris Fashion Week early seemingly to handle Zayn Malik’s blowout fight with Yolanda Hadid last month.\r\nThe supermodel was spotted arriving stateside at JFK airport on Sept. 30 the sa… [+2365 chars]" },
        { source: { id: null, name: "CNBC" }, author: "Amanda Macias", title: "Biden to discuss intensifying supply chain challenges with G20 leaders - CNBC", description: "Biden will convene a supply chain meeting with world leaders while in Rome in hopes of alleviating pressure points in the global trading system.", url: "https://www.cnbc.com/2021/10/29/biden-to-discuss-intensifying-supply-chain-challenges-with-g20-leaders.html", urlToImage: "https://image.cnbcfm.com/api/v1/image/106960099-1634165820515-gettyimages-1346437855-dscf9428_2021101361757912.jpeg?v=1634165887", publishedAt: "2021-10-29T20:14:21Z", content: "A cargo ship moves under the Bayonne Bridge as it heads into port on October 13, 2021 in Bayonne, New Jersey.\r\nWASHINGTON President Joe Biden is expected to spotlight disruptions in the global supply… [+5827 chars]" },
        { source: { id: null, name: "HuffPost" }, author: "Carly Ledbetter", title: "Khloé Kardashian Says She Has COVID Again, But 'Luckily I Am Vaccinated' - HuffPost", description: 'The "Keeping Up With the Kardashians" star and her daughter, True Thompson, both tested positive.', url: "https://www.huffpost.com/entry/khloe-kardashian-true-test-positive-covid_n_617c27e8e4b066de4f6fe682", urlToImage: "https://img.huffingtonpost.com/asset/617c4ceb210000a9586fe205.jpeg?cache=CcbIV5tbhD&ops=1778_1000", publishedAt: "2021-10-29T20:06:00Z", content: "The Kardashians have made some controversial health decisions during the coronavirus pandemic. Kim Kardashian West was slammed for flaunting her 40th birthday celebration on a private island in Octob… [+877 chars]" },
        { source: { id: null, name: "ESPN" }, author: "Marc Raimondi", title: "Jake Paul to fight fellow undefeated boxer Tommy Fury on Dec. 18 in Tampa - espn.com", description: "Jake Paul, the YouTube-star-turned-prizefighter, will fight fellow undefeated boxer Tommy Fury on Dec. 18 in Tampa, Florida, it was officially announced Friday.", url: "https://www.espn.com/boxing/story/_/id/32504332/jake-paul-fight-fellow-undefeated-boxer-tommy-fury-dec-18-tampa", urlToImage: "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1004%2Fr918321_1296x729_16%2D9.jpg", publishedAt: "2021-10-29T19:36:27Z", content: 'One of the knocks on Jake Paul has been that he has not fought a "real boxer." That criticism will be mostly addressed at the end of this year.\r\nPaul, the YouTube-star-turned-prizefighter, will fight… [+2428 chars]' },
        { source: { id: "associated-press", name: "Associated Press" }, author: "Matthew Perrone", title: "FDA paves way for Pfizer COVID-19 vaccinations in young kids - Associated Press", description: "WASHINGTON (AP) — The Food and Drug Administration on Friday paved the way for children ages 5 to 11 to get Pfizer's COVID-19 vaccine. The FDA cleared kid-size doses — just a third of the amount given to teens and adults — for emergency use, and up to 28 mill…", url: "https://apnews.com/article/fda-pfizer-covid-vaccines-kids-1423b2ab0a51bc9c36dbe86964777c07", urlToImage: "https://storage.googleapis.com/afs-prod/media/266cff04836341f1ac97fffdda2f61b0/2953.jpeg", publishedAt: "2021-10-29T19:35:58Z", content: "WASHINGTON (AP) The Food and Drug Administration on Friday paved the way for children ages 5 to 11 to get Pfizers COVID-19 vaccine.\r\nThe FDA cleared kid-size doses just a third of the amount given to… [+5141 chars]" },
        { source: { id: "national-geographic", name: "National Geographic" }, author: "Elizabeth Anne Brown", title: "This fierce fish grows 20 new teeth each day - National Geographic", description: "The Pacific lingcod, which feasts upon a wide variety of prey, replaces teeth much faster than expected—and it might not be alone.", url: "https://www.nationalgeographic.com/animals/article/this-fish-grows-20-new-teeth-per-day-pacific-lingcod", urlToImage: "https://i.natgeofe.com/n/01d4c7f2-4564-46c3-bda5-1334e45df863/NationalGeographic_2744444_16x9.jpg?w=1200", publishedAt: "2021-10-29T19:24:47Z", content: "The Pacific lingcod is an ill-tempered, omnivorous fish with a mouth like a messy silverware drawer, its 500-plus teeth arranged haphazardly on two sets of highly mobile jaws. New research, published… [+6381 chars]" },
      ],
      loading: false,
      page: 1,
      totalPage: 5,
      url: "https://newsapi.org/v2/everything?q=apple&from=2021-10-29&to=2021-10-29&sortBy=popularity&apiKey=539a3a0cbb5d4a149fcfbf93e5c4fbf0&page=",
      title: "Apple",
    };
  }

  getData = async () => {
    this.setState({ loading: true });
    let url = this.state.url + this.state.page;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  };
  pagination = async (page) => {
    if (page === "p") {
      page = this.state.page - 1;
    } else if (page === "n") {
      page = this.state.page + 1;
    }
    await this.setState({ page: page });
    this.getData();
  };
  setNews = async (type) => {
    let url = "";
    let totalPage = 0;
    switch (type) {
      case "Apple":
        url = "https://newsapi.org/v2/everything?q=apple&from=2021-10-29&to=2021-10-29&sortBy=popularity&apiKey=539a3a0cbb5d4a149fcfbf93e5c4fbf0&page=";
        totalPage = 5;
        break;
      case "Technologies":
        url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=539a3a0cbb5d4a149fcfbf93e5c4fbf0&page=";
        totalPage = 1;
        break;
      case "Tesla":
        url = "https://newsapi.org/v2/everything?q=tesla&from=2021-09-30&sortBy=publishedAt&apiKey=539a3a0cbb5d4a149fcfbf93e5c4fbf0&page=";
        totalPage = 1;
        break;
      case "Business":
        url = "https://newsapi.org/v2/top-headlines?category=business&apiKey=539a3a0cbb5d4a149fcfbf93e5c4fbf0&page=";
        totalPage = 5;
        break;
      default:
        return "Never going to happen";
    }
    document.title = type + " - Khoborer Kagoj";
    await this.setState({ url: url, page: 1, totalPage: totalPage, title: type });
    this.getData();
  };
  componentDidMount() {
    // this.getData();
    document.title = "Khoborer Kagoj";
  }
  render() {
    return (
      <div>
        <Navbar setNews={this.setNews} />
        <Route path="/Newspaper/about">
          <About />
        </Route>
        <Route exact={true} path="/Newspaper/">
          {this.state.loading && <Loading />}
          {this.state.articles !== undefined ? (
            <div>
              <Pagination page={this.state.page} totalPage={this.state.totalPage} pagination={this.pagination} />
              <h1>{this.state.title}</h1>
              <div className="container">
                <div className="row">
                  {this.state.articles.map((article) => {
                    return (
                      <div className="col-md-4 my-2" key={article.url}>
                        <NewsItem name={article.source.name} author={article.author} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} publishedAt={article.publishedAt}/>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="error">
              <h1>
                426 Error
              </h1>
              <img src="https://img.icons8.com/ios-filled/250/000000/sad-cloud.png" alt="Error icon" />
              <h3>Sorry there was a problem while fetching the data !</h3>
            </div>
          )}
        </Route>
      </div>
    );
  }
}
