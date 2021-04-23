import React from 'react'
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {

    useEffect(() => {
        const unlisten = history.listen(() => {
          document.getElementById("app_content_wrap").scrollTo(0,0)
        });
        return () => {
          unlisten();
        }
      }, []);

    return ( null)
}

export default withRouter(ScrollToTop);
