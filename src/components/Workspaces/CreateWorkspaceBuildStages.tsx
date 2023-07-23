import React from "react";
import { Box, CircularProgress, Collapse, List, ListItem, ListItemText, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { BuildStage } from "./types";
import { useCreateWorkspace } from "../../context/CreateWorkspaceContext";
import { CheckCircle } from "@mui/icons-material";

type Props = {
  buildStages: BuildStage[]
}

const CreateWorkspaceBuildStages: React.FunctionComponent<Props> = (props) => {
  const { buildStage } = useCreateWorkspace()
  const buildDone = buildStage === props.buildStages.length
  return (
    <Box alignSelf="center" width="25%">
      <List>
        <TransitionGroup>
          {props.buildStages.map((item) => {
            const active = buildStage === item.id
            const stageDone = buildStage > item.id
            return (
              <Collapse key={item.id}>
                <ListItem sx={{ opacity: !buildDone && !active ? .5 : 1, gap: .5 }}>
                  <div style={{ position: "relative", width: 28, height: 28 }}>
                    {stageDone ? <CheckCircle fontSize="medium" color="success" /> : null}
                    {active ? <CircularProgress size={28} sx={{ position: "absolute", top: -2, left: -2 }} /> : null}
                  </div>
                  <ListItemText>
                    <Typography variant="body2">
                      {
                        item.labels[(stageDone && "done") || (active && "active") || "pending"]
                      }
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Collapse>
            )
          }
          )}
        </TransitionGroup>
      </List>
    </Box>
  )
}

export default CreateWorkspaceBuildStages;