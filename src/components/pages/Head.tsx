import * as React from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
  description: string;
  keywords: string;
}

const Head: React.FC<Props> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Amatic+SC:700" rel="stylesheet" />
      <style>{`
              #app {
                  display: flex;
                  flex-direction: column;
                  min-height: 100vh;
              }
              * {
                  margin: 0;
                  padding: 0;
              }
              body {
                  text-align: center;
                  font-family: proximanova, Gidole-Regular, "Helvetica Neue", "Hiragino Kaku Gothic ProN", "Segoe UI", Meiryo, sans-serif;
              }
              ul{
                  list-style-type: none;
              }
              .is-active {
                  opacity: .5;
              }
              .is-active p {
                  background: orange;
                  text-decoration: line-through;
               }
          `}</style>
    </Helmet>
  );
};

export default Head;
