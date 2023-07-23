import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";
import { BuildStage } from "./types";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"
dayjs.extend(duration)

const DURATION = 100

type Props = {
  buildStages: BuildStage[]
}

const CreateWorkspaceBuildProgress: React.FunctionComponent<Props> = (props) => {
  const { buildStage, buildDone } = useCreateWorkspace()
  const elapsed = DURATION / props.buildStages.length * (buildStage)
  const remaining = dayjs.duration(DURATION - elapsed, "seconds").format("m:ss")
  return (
    <Box display="flex" flexDirection="column">
      <LinearProgress variant="determinate" value={elapsed} />
      {
        !buildDone ? (
          <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>
            <span style={{ color: "var(--color-ink-200)" }}>Time remaining:&nbsp;</span>
            <span>up to&nbsp;{remaining}</span>
          </Typography>
        ) : null
      }
    </Box>
  )
}

export default CreateWorkspaceBuildProgress;