// src/icons.tsx
import React from "react";
import { 
  FaCloud, 
  FaChartLine, 
  FaLock, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin,  // ganti message → comments
} from "react-icons/fa";
import { AppIcon } from "./types";

export const CloudIcon: AppIcon = ({ size = 24, color = "currentColor" }) =>
  React.createElement(FaCloud, { size, color });

export const ChartIcon: AppIcon = ({ size = 24, color = "currentColor" }) =>
  React.createElement(FaChartLine, { size, color });

export const LockIcon: AppIcon = ({ size = 24, color = "currentColor" }) =>
  React.createElement(FaLock, { size, color });

export const FacebookIcon: AppIcon = ({ size = 24, color = "white" }) =>
  React.createElement(FaFacebook, { size, color });

export const TwitterIcon: AppIcon = ({ size = 24, color = "white" }) =>
  React.createElement(FaTwitter, { size, color });

export const LinkedinIcon: AppIcon = ({ size = 24, color = "white" }) =>
  React.createElement(FaLinkedin, { size, color });