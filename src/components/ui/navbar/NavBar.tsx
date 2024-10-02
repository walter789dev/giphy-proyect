import { FormEvent, useState } from "react";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/redux";
import { setGifts } from "../../../redux/slices/gift";

const API_KEY = import.meta.env.VITE_APP_KEY;

const NavBar = () => {
   const [queryInput, setQueryInput] = useState("");
   const dispatch = useAppDispatch()

  const fetchGift = async (query: string) => {
    try {
       const response = await fetch(
         `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
       );
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const parseData = data.data.map((el: any) => ({
        urlGift: el.images.fixed_height,
        title: el.title,
      }));

      dispatch(setGifts(parseData));
    } catch (e) {
      console.warn(e);
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchGift(queryInput);
  };

  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      <Form onSubmit={submit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              onChange={(e) => setQueryInput(e.target.value)}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
};

export default NavBar;
