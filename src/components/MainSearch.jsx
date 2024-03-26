import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const jobsArray = useSelector((state) => state.jobs.jobs);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobsAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsArray && jobsArray.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
