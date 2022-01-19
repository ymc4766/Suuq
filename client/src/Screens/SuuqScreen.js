import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { listSuuqs } from "../actions/suuqActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import SuuqCard from "../components/SuuqCard";

const SuuqScreen = () => {
  const dispatch = useDispatch();
  const suuqList = useSelector((state) => state.suuqList);
  const { suuqs, error, loading } = suuqList;

  useEffect(() => {
    dispatch(listSuuqs());
  }, [dispatch]);

  return (
    <div className="">
      <h1>Best beautiful houses Trending today</h1>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <Row>
        {suuqs.map((suuq) => (
          <Col xs={12} sm={6} md={4} lg={4} xl={3} key={suuq._id}>
            <SuuqCard suuq={suuq} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SuuqScreen;
