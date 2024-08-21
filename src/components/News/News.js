import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NullImage from "../../components/Images/nullImage.png";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";
import { header } from "../../config/config";
import { endpointPath } from "../../config/api";
import { Container, Header, card } from "./index";

function News(props) {
  const { newscategory, country, language } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const category = newscategory;
  const title = capitalize(category);
  document.title = `${capitalize(title)} - News`;

  const updateNews = async () => {
    setLoading(true);

    try {
      const response = await axios.get(endpointPath(country, category, language));
      const parsedData = response.data;
      setArticles(parsedData.articles);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error(error);
      setLoading(false); // Ensure loading is set to false in case of an error
    }
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [language]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>{header(capitalize(category))}</Header>
          <Container>
            <Row>
              {articles.map((element) => (
                <Col sm={12} md={6} lg={4} xl={4} style={card} key={uuidv4()}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    published={element.publishedAt}
                    channel={element.source.name}
                    alt="News image"
                    publishedAt={element.publishedAt}
                    imageUrl={element.image === null ? NullImage : element.image}
                    urlNews={element.url}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

News.defaultProps = {
  country: "us",
  newscategory: "general",
};

News.propTypes = {
  country: PropTypes.string,
  newscategory: PropTypes.string,
  language: PropTypes.string.isRequired,
};

export default News;
