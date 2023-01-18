def soundwave_filter(soundwave, lower_limit, upper_limit)

  new_soundwave = []
  
  soundwave.each do |frequency|
    if frequency < lower_limit
      new_soundwave << lower_limit
    else
      new_soundwave << frequency
    end
    
  end

  return new_soundwave

end