"use client";

import React from "react";
import { Download, Eye } from "lucide-react";
import Paper from "@/components/Paper";
import "@/styles/listItem.css";

interface TaskInfo {
  title: string;
  subtitle?: string;
  status?: string;
  deadline?: string;
  time?: string;
  fileType?: "word" | "pdf";
  size?: string;
  lastEdit?: string;
}

interface ListItemProps {
  title?: string;
  buttonText?: string;
  tasks: TaskInfo[];
  variant?: "tasks" | "files";
}

const ListItem = ({
  title = "Tareas pendientes",
  buttonText = "Ver todos",
  tasks,
  variant = "tasks",
}: ListItemProps) => {
  return (
    <Paper title={title} buttonText={buttonText}>
      <div className="listContainer">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`listItem ${
              index !== tasks.length - 1 ? "listItemBorder" : ""
            }`}
          >
            {variant === "files" ? (
              <div
                className={`iconBox ${
                  task.fileType === "word" ? "wordIcon" : "pdfIcon"
                }`}
              >
                <span className="iconText">
                  {task.fileType === "word" ? "W" : "PDF"}
                </span>
              </div>
            ) : (
              <div className="placeholderIcon" />
            )}

            {variant === "tasks" ? (
              <div className="taskGrid">
                <div className="flex flex-col min-w-0">
                  <p className="textEllipsis titleText" title={task.title}>
                    {task.title}
                  </p>
                  <p className="textEllipsis subtitleText" title={task.subtitle}>
                    {task.subtitle}
                  </p>
                </div>

                <div className="text-left">
                  <span className="infoLabel">Status</span>
                  {task.status}
                </div>

                <div className="text-left">
                  <span className="infoLabel">Fecha límite</span>
                  <span>{task.deadline}</span>
                </div>

                <div className="text-left">
                  <span className="infoLabel">Tiempo</span>
                  <span>{task.time}</span>
                </div>
              </div>
            ) : (
              <div className="fileItem">
                <div className="min-w-0 flex-1">
                  <p className="fileTitle textEllipsis" title={task.title}>
                    {task.title}
                  </p>
                  <p className="fileDetails textEllipsis" title={task.size}>
                    {task.size}
                    {task.lastEdit && (
                      <span className="fileDetailsExtra">
                        • Últ. edición {task.lastEdit}
                      </span>
                    )}
                  </p>
                </div>

                <div className="actionButtons">
                  <button className="actionButton">
                    <Download size={15} className="text-gray-700" />
                  </button>
                  <button className="actionButton">
                    <Eye size={15} className="text-gray-700" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default ListItem;
