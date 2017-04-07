// this is for emacs file handling -*- mode: c++; indent-tabs-mode: nil -*-

// -- BEGIN LICENSE BLOCK ----------------------------------------------
// This file is part of FZIs ic_workspace.
//
// This program is free software licensed under the LGPL
// (GNU LESSER GENERAL PUBLIC LICENSE Version 3).
// You can find a copy of this license in LICENSE folder in the top
// directory of the source code.
//
// © Copyright 2016 FZI Forschungszentrum Informatik, Karlsruhe, Germany
//
// -- END LICENSE BLOCK ------------------------------------------------

//----------------------------------------------------------------------
/*!\file
*
* \author  Felix Mauch <mauch@fzi.de>
* \date    2015-02-27
*
*/
//----------------------------------------------------------------------

#define IC_PERFORMANCE_MONITOR
#include "icl_core_performance_monitor/PerformanceMonitor.h"

using namespace icl_core::perf_mon;

int main(int argc, char* argv[])
{
  icl_core::logging::initialize(argc, argv);
  PERF_MON_INITIALIZE(10, 1000);

  PERF_MON_START("test_timer");
  PERF_MON_START("all");
  PERF_MON_ENABLE("all_prefix");
  PERF_MON_ADD_STATIC_DATA_P("number of runs", 9.0, "all_prefix");
  for (size_t i=1; i < 10; ++i)
  {
    // do some work
    uint32_t j = i / i;
    j++;
    icl_core::os::usleep(110000);
    PERF_MON_PRINT_AND_RESET_INFO("test_timer", "event");
  }

  PERF_MON_PRINT_INFO_P("all", "over", "all_prefix");

  PERF_MON_SUMMARY_ALL_INFO;
  return 0;
}
