import React from "react";
import {RecoilRoot} from "recoil";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme} from "./TodoAPP/theme";
import TodoApp from "./TodoAPP/TodoApp";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import FramerMotionWrapper from "./FramerMotion/FramerMotionWrapper";
import Trello from "./Trello/Trello"

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
            <ThemeProvider theme={darkTheme}>
              <TodoApp/>
            </ThemeProvider>
          </RecoilRoot>
        </Route>
        <Route path="/framerMotion">
          <FramerMotionWrapper/>
        </Route>
        <Route path="/trello">
          <RecoilRoot>
            <Trello/>
          </RecoilRoot>
        </Route>


      </Switch>

    </BrowserRouter>

  )
}

export default LectureList
