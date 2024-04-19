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
            colorPrimary: Colors.greenTertiary,
            horizontalItemHoverBg: Colors.hoverAltBlack,
            horizontalItemSelectedColor: Colors.greenTertiary,
            horizontalItemSelectedBg: Colors.hoverAltBlack,
            itemHoverColor: Colors.greenTertiary,
            itemColor: Colors.greenTertiary,
            itemBg: Colors.altBlack,
            popupBg: Colors.altBlack,
            horizontalItemBorderRadius: 5,
            itemPaddingInline: 30
        },
        Layout: {
            bodyBg: Colors.background
        }

    },
};

export default theme;