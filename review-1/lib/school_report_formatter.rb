def format_report_results(string)
  if string == ""
    return ""
  end
  report_array = string.split(", ")
  if (report_array - ["Green", "Amber", "Red"]).length > 0 then fail "Invalid input, please check it" end
  green_grades = report_array.count("Green")
  amber_grades = report_array.count("Amber")
  red_grades = report_array.count("Red")
  if green_grades == 0 && amber_grades == 0
    return "Red: #{red_grades}"
  elsif green_grades == 0 && red_grades == 0
    return "Amber: #{amber_grades}"
  elsif red_grades == 0 && amber_grades == 0
    return "Green: #{green_grades}"
  elsif amber_grades == 0
    return "Green: #{green_grades}\nRed: #{red_grades}"
  elsif red_grades == 0
    return "Green: #{green_grades}\nAmber: #{amber_grades}"
  elsif green_grades == 0
    return "Amber: #{amber_grades}\nRed: #{red_grades}"
  else
    return "Green: #{green_grades}\nAmber: #{amber_grades}\nRed: #{red_grades}"
  end
end