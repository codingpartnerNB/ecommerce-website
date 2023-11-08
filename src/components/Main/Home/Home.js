import { Container } from "react-bootstrap";
import HomeItem from "./HomeItem";
import styles from './Home.module.css';

const Home = () => {
  const data = [
    {
      id: "d1",
      date: "JUL 16",
      title: "DETROIT, MI",
      desc: "DTE ENERGY MUSIC THEATRE"
    },
    {
      id: "d2",
      date: "JUL 19",
      title: "TORONTO,ON",
      desc: "BUDWEISER STAGE"
    },
    {
      id: "d3",
      date: "JUL 22",
      title: "BRISTOW, VA",
      desc: "JIGGY LUBE LIVE"
    },
    {
      id: "d4",
      date: "JUL 29",
      title: "PHOENIX, AZ",
      desc: "AK-CHIN PAVILION"
    },
    {
      id: "d5",
      date: "AUG 2",
      title: "LAS VEGAS, NV",
      desc: "T-MOBILE ARENA"
    },
    {
      id: "d6",
      date: "AUG 7",
      title: "CONCORD, CA",
      desc: "CONCORD PAVILION"
    }
  ];
  return (
    <>
      <header className={`${styles.album} p-2`}>
        <div className={`p-2 ${styles['album-div1']}`}>Get our Latest Album</div>
        <div className={`${styles['album-play']}`}>►</div>
      </header>
      <h2 style={{textAlign: "center"}} className="m-5">TOURS</h2>
      <Container className="w-50" style={{margin: "auto", marginBottom: "4rem"}}>
      {data.map((item)=><HomeItem key={item.id} date={item.date} title={item.title} desc={item.desc} />)}
      </Container>
    </>
  );
};

export default Home;
