import { Tooltip, TooltipProps } from "@rneui/themed";
import { ReactNode, useContext, useState } from "react";
import {  Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View } from "react-native";
import { AuthContext } from "@/context/authContext";

interface ControlledTooltipProps extends TooltipProps {
  children: ReactNode;
}
export const ControlledTooltip = ({
  children,
  ...props
}: ControlledTooltipProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Tooltip
      visible={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      {...props}
    >
      <FontAwesomeIcon icon={faArrowLeft} size={25} />
    </Tooltip>
  );
};

export const TooltipInfoExit = () => {
  const [open, setOpen] = useState(false);
  const { handleAuthLogout } = useContext(AuthContext);
  return (
    <>
      <ScrollView>
        <View >
          <View style={styles.view}>
            <ControlledTooltip
              visible={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              width={100}
              backgroundColor={'gray'}
              popover={<Pressable
                      onPress={handleAuthLogout}
                    >
                      <Text className="text-center text-white">Sair</Text>
                    </Pressable>}
            >
              <FontAwesomeIcon icon={faArrowLeft} size={25} />
            </ControlledTooltip>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
