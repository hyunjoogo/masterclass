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
    background-color: rgb(255, 255, 255);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  `;

  const gesturesVars = {
    hover : {
      scale: 1.2,
      rotate: 90,
    },
    tab : {
      scale: 0.8,
      rotate: -90,
      borderRadius: "100%"
    },
  }


  return (
    <Wrapper>
      <Box variants={gesturesVars} whileHover="hover" whileTap="tab"/>

      {/*<Variants/>*/}
      {/*<Animation/>*/}
    </Wrapper>
  )
}

export default FramerMotion
