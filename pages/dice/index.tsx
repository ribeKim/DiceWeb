import path from 'path';
import Unity, { UnityContext } from 'react-unity-webgl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
//import dynamic from 'next/dynamic';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    unity: {
      width: '50vw',
      height: '50vh',
    }
  }),
);

const buildUrl = 'WebGL/Build';
// const buildUrl = 'http://localhost:8080/WebGL/Build';
const unityContext = new UnityContext({
  loaderUrl: `${buildUrl}/WebGL.loader.js`,
  dataUrl: `${buildUrl}/WebGL.data`,
  frameworkUrl: `${buildUrl}/WebGL.framework.js`,
  codeUrl: `${buildUrl}/WebGL.wasm`,
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "DiceGame",
  productVersion: "0.1",
});

export default function Dice() {
  const [progression, setProgression] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    unityContext.on('SendPacket', (str) => {
      window.alert(str);
    });

    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);

  const Test = () => {
    //unityContext.send("WebsocketManager", 'Test', 10);
    unityContext.send("WebSocketManager", "Test", "asdfasdfdsaf");
    console.log(unityContext);

    console.log("test button clicked - in index.tsx");
  }

  return (
    <div>
      <Unity
        unityContext={unityContext}
        className={classes.unity}
      />
      <p>
        {`Loading: ${progression}`}
      </p>
    </div>

  );
}