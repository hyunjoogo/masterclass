import React from "react";
import {RecoilRoot} from "recoil";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import {todoAppDarkTheme} from "./theme";
import TodoApp from "./TodoAPP/TodoApp";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import FramerMotionWrapper from "./FramerMotion/FramerMotionWrapper";
import Trello from "./Trello/Trello";

const GlobalStyle = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  body {
    line-height: 1;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background: #121212;
    color: #bbb;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;


const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LectureList = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LinkWrapper>
            <Link to="/todoList">TODOLIST</Link>
            <Link to="/framerMotion">MOTION</Link>
            <Link to="/trello">TRELLO</Link>
          </LinkWrapper>

        </Route>
        <Route path="/todoList">
          <RecoilRoot>
            <ThemeProvider theme={todoAppDarkTheme}>
              <TodoApp/>
            </ThemeProvider>
          </RecoilRoot>
        </Route>
        <Route path="/framerMotion">
          <FramerMotionWrapper/>
        </Route>
        <Route path="/trello">
          <RecoilRoot>
            <ThemeProvider theme={todoAppDarkTheme}>
              <GlobalStyle/>
              <Trello/>
            </ThemeProvider>
          </RecoilRoot>
        </Route>


      </Switch>

    </BrowserRouter>

  )
}

export default LectureList
