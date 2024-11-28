import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeContext } from "../store/context";
import { useContext, useState } from "react";

function Layout() {
  const { state: data, changeMode, dispatch } = useContext(ThemeContext);
  const [text, setText] = useState("");
  const [updated, setUpdated] = useState(false);
  const [id, setId] = useState(0);

  // Add Item
  const submitHandle = (e) => {
    e.preventDefault();
    if (!updated) {
      dispatch({
        type: "ADD",
        payload: {
          value: text,
          id: Math.random(),
        },
      });
      setText("");
    } 
  };

  // Delete Item
  const deleteItem = (id) => {
    dispatch({
      type: "DELETE",
      payload: {
        id,
      },
    });
  };

  // changeFormToChange
  const changeFormToUpdate = (value, id) => {
    setText(value);
    setUpdated(true);
    setId(id);
  };

  // Update Item
  const updateItem = (value , id) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        value
      },
    });
    setUpdated(false);
    setText('')
  };
  return (
    <>
      <Header />
      <main>
        <div className="main-header">
          <button onClick={changeMode} className="changeMode">
            Change Mode
          </button>
          <div className="item-container">
            {data
              ? data.map((item) => {
                  const { value, id } = item;
                  return (
                    <div key={id} className={`item item-${id}`}>
                      <p>{value}</p>
                      <button onClick={() => deleteItem(id)} className="delete">
                        X
                      </button>
                      <button
                        onClick={() => changeFormToUpdate(value, id)}
                        className="update"
                      >
                        ⟳
                      </button>
                    </div>
                  );
                })
              : null}
          </div>
          <form onSubmit={submitHandle}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            {!updated ? (
              <button type="submit">Add</button>
            ) : (
              <button type="button" onClick={(e) => {
                e.preventDefault()
                updateItem(text , id)
              }}>
                Update
              </button>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
