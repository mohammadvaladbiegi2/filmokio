import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import configParticlJS from "./ParticlsConfig";

export default function ParticlsJS() {
  const options = useMemo(() => {
    return configParticlJS;
  }, []);

  const particlesInit = useCallback((engin) => {
    loadSlim(engin);
    loadFull(engin);
  }, []);

  return <Particles init={particlesInit} options={options}></Particles>;
}
