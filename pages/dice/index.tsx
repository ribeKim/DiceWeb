import path from 'path';
import Unity, {UnityContext} from 'react-unity-webgl';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      unity: {
        width: '50vw',
        height: '50vh',
      }
    }),
);
export default function Dice() {
  const classes = useStyles();
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
  return (
      <Unity
          unityContext={unityContext}
          className={classes.unity}
      />
  );
}