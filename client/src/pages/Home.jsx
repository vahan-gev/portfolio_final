import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.homePage && (
        <motion.section className="home" {...slideAnimation("down")}>
          <div
            className={`rounded-full`}
            style={{
              backgroundColor: snap.color,
            }}
          >
            <motion.header>
              <h1 className="text-white xl:text-[3rem] text-[2rem]">V</h1>
            </motion.header>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
