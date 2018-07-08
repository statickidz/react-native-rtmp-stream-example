import React from 'react';
import { Container, Content, Text, H1, H2, H3, Button } from 'native-base';
import Spacer from './Spacer';

import { NodeCameraView } from 'react-native-nodemediaclient';

class Stream extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPublish: false,
      publishBtnTitle: 'Publish'
    };
    
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Spacer size={30} />
          <H1>Stream now!!!</H1>
          <NodeCameraView 
            style={{ height: 400 }}
            ref={(vb) => { this.vb = vb }}
            outputUrl = {"rtmp://10.0.3.2/live/TESTING"}
            camera={{ cameraId: 1, cameraFrontMirror: true }}
            audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
            video={{ preset: 24, bitrate: 400000, profile: 2, fps: 30, videoFrontMirror: true }}
            autopreview={true}
          />

          <Button
            onPress={() => {
              if (this.state.isPublish) {
                this.setState({ publishBtnTitle: 'Start Publish', isPublish: false });
                this.vb.stop();
              } else {
                this.setState({ publishBtnTitle: 'Stop Publish', isPublish: true });
                this.vb.start();
              }
            }}
          >
            <Text>{this.state.publishBtnTitle}</Text>
          </Button>
          <Spacer size={60} />
        </Content>
      </Container>
    );
  }
}

export default Stream;
