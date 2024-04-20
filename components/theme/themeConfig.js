import {Colors} from "./colors";

const theme = {
    token: {
        fontSize: 16,
        primaryColor: Colors.greenPrimary,
        Input: {
            colorPrimary: Colors.greenPrimary,
            hoverBorderColor: Colors.greenTertiary
        },
        Button: {
            colorPrimary: Colors.greenPrimary,
            colorPrimaryHover: Colors.greenSecondary
        },
        Menu: {
            horizontalItemHoverBg: Colors.hoverAltBlack,
            horizontalItemSelectedColor: Colors.greenTertiary,
            horizontalItemSelectedBg: Colors.hoverAltBlack,
            itemHoverColor: Colors.greenTertiary,
            itemColor: Colors.altBlack,
            itemBg: Colors.greenSecondary,
            popupBg: Colors.altBlack,
            horizontalItemBorderRadius: 5,
            itemMarginBlock: 0
        },
        Layout: {
            bodyBg: Colors.background
        }

    },
};

export default theme;