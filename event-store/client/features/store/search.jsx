import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function search(props) {
  const [value, setValue] = useState("");
  const onValueChange = (e) => {
    setValue(e.target.value.trimStart());
  };
  let history = useHistory();

  const query = () => {
    if (value.length == 0) return;
    props.closeDialog();
    history.push({
      pathname: "/search",
      search: "?query=" + value,
    });
  };

  return (
    <div id="search">
      <div class="w-50 mx-auto">
        <div class="search_wrap">
          <input
            type="text"
            value={value}
            onChange={onValueChange}
            class="searchTerm"
            placeholder="Search for product"
          />
          <button onClick={query} class="searchButton pb-2">
            <div className={value.length ? "app_fadeIn" : "app_fadeOut"}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>
          </button>

          <div className="pl-3 pt-1" onClick={props.closeDialog}>
            <svg
              height="15"
              width="20"
              class="Icon Icon--close"
              role="presentation"
              viewBox="0 0 16 14"
            >
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default search;
