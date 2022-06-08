import React, {useState, useEffect} from "react";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Pagination from "../pagination";
import Card from "../card";
import "./index.scss"
import Container from "../container";
import {useNavigate, useSearchParams} from "react-router-dom";
import Loader from "../loader";

const PostsList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pageFromUrl = searchParams.get("currentPage") || 1;
  const termFromUrl = searchParams.get("q") || "";
  const [term, setTerm] = useState<string>(termFromUrl);
  const [limit, setLimit] = useState<number>(10);
  const [skip, setSkip] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(+pageFromUrl);
  const {fetchPosts} = useActions()
  const {data, loading, error} = useTypedSelector(state => state.fetchPosts)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (term === "") {
      searchParams.delete("q")
      setCurrentPage(1)
    }

    if (term !== "") {
      setCurrentPage(1)
      navigate({
        search: `currentPage=${currentPage}&q=${term}`
      })
    }

    fetchPosts(skip, limit, term)
  }

  useEffect(() => {
    let pagesToSkip = (currentPage - 1) * 10;

    if (term !== "") {
      fetchPosts(pagesToSkip, 10, term)
      navigate({
        search: `currentPage=${currentPage}&q=${term}`
      })
    } else {
      fetchPosts(pagesToSkip, 10);
      searchParams.delete("q")
      navigate({
        search: `currentPage=${currentPage}`
      })
    }
  }, [currentPage, termFromUrl])

  return (
    <Container>
      <div className="posts-list">
        <div className="search">
          <form onSubmit={onSubmit}>
            <input className="search-input" placeholder="Поиск по названию..." type="text" value={term}
                   onChange={e => setTerm(e.target.value)}/>
            <button className="search-button">поиск</button>
          </form>
        </div>

        {loading && <Loader/>}
        {error && <h3>{error}</h3>}

        {data.total != null && !loading &&
            <div className="search-results">Найдено <b>{data.total}</b> результатов</div>}
        <div className="cards">
          {!error && !loading && data.posts.map((el, index) => <Card key={index} {...el}/>)}
        </div>

        {!loading && data.total != null &&
            <Pagination setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        total={data.total} skip={data.skip!}
                        limit={data.limit!}/>}
      </div>
    </Container>
  )
}

export default PostsList;