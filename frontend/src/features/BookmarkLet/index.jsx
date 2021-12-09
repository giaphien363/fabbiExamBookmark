import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { useToken } from "../../CustomHook/useToken";
import {useHistory} from "react-router-dom"

import raw from "../BookmarkLet/codeBookmarkLet.txt";

const BookmarkLet = () => {
  const [checkGenerate, setCheckGenerate] = useState(false);
  const [value, setValue] = useState("");
  const { access } = useToken();

  const history = useHistory();
  if (!access) {
    history.push("/login");
  }
  useEffect(() => {
    document.title = "Bookmarklet";
  }, []);

  useEffect(() => {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        setValue(text);
      });
  }, []);

  const generateFunction = () => {
    setCheckGenerate(true);
  };
  const previewFile = (e) => {
    console.log();
    const file = e.target.files;
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        setValue(reader.result);
      },
      false
    );

    if (file) {
      fetch(raw)
        .then((r) => r.text())
        .then((text) => {
          setValue(text);
        });
    }
  };

  return (
    <Container style={{marginTop: "5rem" }}>
      <div style={{ textAlign: "center" }}>
        <h3>Bookmarklet</h3>

        <input
          className="form-control col-md-3 my-3"
          type="file"
          onChange={previewFile}
        />

        <textarea
          className="form-control"
          rows="10"
          value={value}
          placeholder="Write code here"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></textarea>

        <button
          onClick={generateFunction}
          className="btn btn-outline-secondary my-3"
        >
          Generate bookmarklet
        </button>

        {checkGenerate && (
          <a
            className="btn btn-outline-success mx-3"
            href={`javascript:(function(){${value}})()`}
          >
            Demo bookmark drag
          </a>
        )}
      </div>
    </Container>
  );
};

BookmarkLet.propTypes = {};

export default BookmarkLet;
