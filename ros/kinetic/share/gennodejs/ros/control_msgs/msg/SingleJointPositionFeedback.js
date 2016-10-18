// Auto-generated. Do not edit!

// (in-package control_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class SingleJointPositionFeedback {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.position = 0.0;
    this.velocity = 0.0;
    this.error = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SingleJointPositionFeedback
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [position]
    bufferInfo = _serializer.float64(obj.position, bufferInfo);
    // Serialize message field [velocity]
    bufferInfo = _serializer.float64(obj.velocity, bufferInfo);
    // Serialize message field [error]
    bufferInfo = _serializer.float64(obj.error, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SingleJointPositionFeedback
    let tmp;
    let len;
    let data = new SingleJointPositionFeedback();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    tmp = _deserializer.float64(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velocity]
    tmp = _deserializer.float64(buffer);
    data.velocity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [error]
    tmp = _deserializer.float64(buffer);
    data.error = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'control_msgs/SingleJointPositionFeedback';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8cee65610a3d08e0a1bded82f146f1fd';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    Header header
    float64 position
    float64 velocity
    float64 error
    
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    `;
  }

};

module.exports = SingleJointPositionFeedback;