import React, { Component } from 'react'
import NotificationAlert from "react-notification-alert";
import { Offline, Online, Detector } from "react-detect-offline";

export class OfflineDetector extends Component {

  
  offlineAlert = () => {
    let options = {
      place: 'tc',
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: 'danger',
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    //
    this.refs.notify.notificationAlert(options);
  }
  


  render() {
    return (
      <>

        <NotificationAlert ref="offline" />

        <Button
          block
          color="primary"
          onClick={() => this.offlineAlert()}
        >
          Offline Alert
        </Button>
        
      </>
    )
  }
}

export default OfflineDetector
