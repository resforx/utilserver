import "./App.css";
import ReactORM, { Model } from '../../utilserver/src/ts/test/test.index';

export default function App() {
  interface Istore extends Model {
    args: number
  }
  const Store: Istore[] = [
    {}
  ];

  const storeLike = new ReactORM<Istore>(Store)

  return (
    <>
     <h1>&lt;태준이의 테스트 페이지&gt;</h1>
    </>
  )
}
