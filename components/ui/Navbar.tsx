import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        padding: "0px 50px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="poke icon"
        width={80}
        height={80}
      />

      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okémon
      </Text>

      <Spacer css={{ flex: 1 }} />
      <Text color="white" size="$xl">
        Favoritos
      </Text>
    </div>
  );
};
