import styled from "styled-components";
import {motion} from "framer-motion"


const FramerMotion = () => {

  const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  `;

  const Circle = styled(motion.div)`
    background-color: white;
    height: 70px;
    width: 70px;
    place-self: center;
    border-radius: 35px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  `;

  const myVariant = {
    start: {scale: 0},
    end: {scale: 1, rotateZ: 360, transition: {type: "spring", bounce: 0.3}}
  }

  const boxVariants = {
    start: {
      opacity: 0,
      scale: 0.5
    },
    end: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        delayChildren: 0.5, // 처음 자식 딜레이
        staggerChildren: 0.5, // 자식들마다의 딜레이
        duration: 0.5,
        bounce: 0.5
      },
    }
  }

  const circleVariants = {
    start: {
      opacity: 0,
      y: 10,
    },
    end: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
      </Box>
      {/*<Box variants={myVariant} initial="start" animate="end"/>*/}
    </Wrapper>
  )
}

export default FramerMotion
