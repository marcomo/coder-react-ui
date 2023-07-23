import React, { useEffect } from "react";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";
import { BuildStage } from "./types";
import CreateWorkspaceBuildStages from "./CreateWorkspaceBuildStages";
import CreateWorkspaceBuildProgress from "./CreateWorkspaceBuildProgress";
import CreateWorkspaceBuildActions from "./CreateWorkspaceBuildActions";
dayjs.extend(duration)

const buildStages: BuildStage[] = [
  {
    id: 0,
    value: "start",
    labels: {
      pending: "Start Workspace",
      active: "Starting Workspace",
      done: "Started Workspace"
    }
  },
  {
    id: 1,
    value: "image",
    labels: {
      pending: "Install image",
      active: "Installing image",
      done: "Installed image"
    }
  },
  {
    id: 2,
    value: "git",
    labels: {
      pending: "Install Git resources",
      active: "Installing Git resources",
      done: "Installed Git resources"
    }
  },
  {
    id: 3,
    value: "ides",
    labels: {
      pending: "Prepare IDEs",
      active: "Preparing IDEs",
      done: "Prepared IDEs"
    }
  }
]


const CreateWorkspaceBuildStep: React.FunctionComponent = () => {
  const { buildStage, buildDone, dispatch } = useCreateWorkspace()

  useEffect(() => {
    const timer = setInterval(() => {
      if (buildStage < 4) {
        dispatch({ type: "increment_build_stage" })
      } else {
        clearInterval(timer)
      }
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch, buildStage]);

  return (
    <Box display="flex" flexDirection="column" gap={4} flex={1} pt={4}>
      <CreateWorkspaceBuildProgress buildStages={buildStages} />
      <CreateWorkspaceBuildStages buildStages={buildStages} />
      {buildDone ? <CreateWorkspaceBuildActions /> : null}
    </Box >
  )
}

export default CreateWorkspaceBuildStep