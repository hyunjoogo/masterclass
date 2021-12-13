import React from "react";
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./TodoAPP/theme";
import TodoApp from "./TodoAPP/TodoApp";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import FramerMotionWrapper from "./FramerMotion/FramerMotionWrapper";


const LectureList = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Link to="/todoList">TODOLIST</Link>
          <Link to="/framerMotion">MOTION</Link>
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


      </Switch>

    </BrowserRouter>

  )
}

export default LectureList
