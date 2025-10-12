import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import Collaborate from "@/routes/pages/Collaborate";
import Mypage from "@/routes/pages/Mypage";

export const { Stack, useFlow } = stackflow({
    transitionDuration: 350,
    activities: { Collaborate, Mypage },
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
    ],
    initialActivity: () => "Mypage",
});
